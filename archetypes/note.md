---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "Note du  {{ substr .Name 0 10 }}"
type: "note"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- {{ delimit (split (substr .Name  17) "-" | first 1) "" | upper }}
categories:
- note
---
# {{% param "description" %}}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Notes:


