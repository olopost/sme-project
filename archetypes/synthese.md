---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "desc"
type: "synthese"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- {{ delimit (split (substr .Name  17) "-" | first 1) "" | upper }}
categories:
- synthese
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Notes:


