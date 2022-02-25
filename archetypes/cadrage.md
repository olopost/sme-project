---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "Note de cadrage du {{ substr .Name 0 10 }}"
type: "cadrage"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- CADRAGE
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- CADRAGE
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

*Objectifs: Presenter l'organisation à mettre en place*

