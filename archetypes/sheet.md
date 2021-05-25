---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
type: "sheet"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: true
tags:
- {{ delimit (split (substr .Name  17) "-" | first 1) "" | upper }}
categories:
- note
---

# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date of assessment:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Project Details

### PM

### Objective
