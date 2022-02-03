---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "Archi board du  {{ substr .Name 0 10 }}"
type: "archiboard"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- ARCHIBOARD
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- ARCHIBOARD
---
# {{% param "description" %}}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

# Participant

- Samuel MEYNARD

# Ordre du jour

- Presentation

# Notes diverses

# Actions prises
