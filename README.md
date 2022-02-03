## SME Project

A Hugo theme for the generation, organisation, and viewing of multi-project notes written in markdown.

## installation

Add this theme in your hugo project, and add this in your `config.toml` file.

*Example of config.toml file*

``` toml
baseURL = "https://kb.local.meyn.fr"
languageCode = "fr-fr"
title = "SME - KB"
enableEmoji = true
theme = "sme-project"

[taxonomies]
  project = "project"
  tags = "tags"
  categories = "categories"

[[params.menu]]
  name = "Calendar"
  url = "all/"

[[params.menu]]
  name = "Project"
  url = "project/"

[[params.menu]]
  name = "Docs"
  url = "org/"


  [[params.menu]]
    identifier = "tags"
    pre = ""
    post = ""
    name = "Tags"
    url = "/tags/"
    title = ""
    weight = 2
  [[params.menu]]
    identifier = "categories"
    pre = ""
    post = ""
    name = "Categories"
    url = "/categories/"
    title = ""
    weight = 3



# If you want the table of contents at the top of individual notes to index
# further levels of header (default H2) set this to a higher number
[markup]
  [markup.tableOfContents]
    endLevel = 2

[frontmatter]
  lastmod = ["lastmod", ":fileModTime", ":default"]
```

After installation, your site looklike that

![example](site.png)
