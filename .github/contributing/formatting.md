# Formatting

The files contained in the this are subject to these formatting rules to keep consistency between pages.

1. Pages must be included under their own folder if they are under their own category in the table of contents, or if
   they implement
   the [block or inline importing feature of docfx](https://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html#file-inclusion)
   .
2. `toc.yml` files must be on a per category basis, and there should be no `items` field.
3. All files and their folders must follow [Snake Case](https://en.wikipedia.org/wiki/Snake_case).
4. All images pertaining to a subject or article must have its own `images/` folder. You may create folders inside of
   their images folder to sort them.
5. Markdown files must have a title block and not an h1 header or single `#` header. Subsequent headers must be in
   markdown format.
