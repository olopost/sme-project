---
project: "{{ .Dir | path.Base | humanize | title }}"
description: "desc"
type: "follow-up"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- TO-CHANGE
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- TO-CHANGE
---

# {{ substr .Name  11 -10 | humanize | title }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Notes:

