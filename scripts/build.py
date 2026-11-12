#!/usr/bin/env python3
"""Build self-contained deck files.

For every modules/<name>/index.html, inline template/deck.css and
template/deck.js and write dist/<name>.html. Also builds
dist/template.html from template/template.html.

Source decks must reference the template with exactly:
    <link rel="stylesheet" href="../../template/deck.css">
    <script src="../../template/deck.js"></script>
(template/template.html uses href="deck.css" and src="deck.js".)

Usage:  python3 scripts/build.py            # build everything
        python3 scripts/build.py 01-pnl     # build only matching module folders
Python 3 standard library only.
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "template"
MODULES = ROOT / "modules"
DIST = ROOT / "dist"

CSS_TAG = re.compile(
    r'<link\b[^>]*\brel=["\']stylesheet["\'][^>]*\bhref=["\'](?:\.\./\.\./template/)?deck\.css["\'][^>]*>'
    r'|<link\b[^>]*\bhref=["\'](?:\.\./\.\./template/)?deck\.css["\'][^>]*\brel=["\']stylesheet["\'][^>]*>',
    re.IGNORECASE,
)
JS_TAG = re.compile(
    r'<script\b[^>]*\bsrc=["\'](?:\.\./\.\./template/)?deck\.js["\'][^>]*>\s*</script>',
    re.IGNORECASE,
)
# Relative asset references that would break once the file moves to dist/.
LOCAL_REF = re.compile(r'\b(?:src|href)=["\'](?!https?:|data:|#|mailto:|tel:)([^"\']+)["\']', re.IGNORECASE)


def build_one(src: pathlib.Path, out: pathlib.Path, css: str, js: str) -> list:
    html = src.read_text(encoding="utf-8")
    problems = []
    if len(CSS_TAG.findall(html)) != 1:
        problems.append("expected exactly one <link rel=\"stylesheet\" href=\"../../template/deck.css\">")
    if len(JS_TAG.findall(html)) != 1:
        problems.append("expected exactly one <script src=\"../../template/deck.js\"></script>")
    if problems:
        return problems

    # Check for stray relative references before inlining (template code may mention paths).
    scan = JS_TAG.sub("", CSS_TAG.sub("", html))
    leftovers = sorted(set(LOCAL_REF.findall(scan)))

    style = "<style>\n" + css.replace("</style", "<\\/style") + "\n</style>"
    script = "<script>\n" + js.replace("</script", "<\\/script") + "\n</script>"
    html = CSS_TAG.sub(lambda _m: style, html, count=1)
    html = JS_TAG.sub(lambda _m: script, html, count=1)

    for ref in leftovers:
        problems.append("warning: local reference left unresolved: " + ref)

    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")
    return [p for p in problems if p.startswith("warning")]


def main(argv):
    css = (TEMPLATE / "deck.css").read_text(encoding="utf-8")
    js = (TEMPLATE / "deck.js").read_text(encoding="utf-8")
    filters = argv[1:]

    jobs = []
    if not filters:
        jobs.append((TEMPLATE / "template.html", DIST / "template.html"))
    if MODULES.is_dir():
        for index in sorted(MODULES.glob("*/index.html")):
            name = index.parent.name
            if filters and not any(f in name for f in filters):
                continue
            jobs.append((index, DIST / (name + ".html")))

    failed = 0
    for src, out in jobs:
        issues = build_one(src, out, css, js)
        errors = [i for i in issues if not i.startswith("warning")]
        rel_src = src.relative_to(ROOT)
        if errors:
            failed += 1
            print("FAIL  %s" % rel_src)
        else:
            size = out.stat().st_size / 1024
            print("ok    %s -> %s (%.0f KB)" % (rel_src, out.relative_to(ROOT), size))
        for i in issues:
            print("      " + i)

    if not jobs:
        print("nothing to build")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
