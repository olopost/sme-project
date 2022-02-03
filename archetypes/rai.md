---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "RAI du {{ substr .Name 0 10 }}"
type: "suivi"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- RAI
- {{ delimit (split (substr .Name  17) "-" | first 1) "" | upper }}
categories:
- suivi
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

# NEXT STEP
# STEP TAKEN



