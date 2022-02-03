---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "desc"
type: "etude"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- ETUDE
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- ETUDE
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Objectif de l'étude

## Environnement mis en place





