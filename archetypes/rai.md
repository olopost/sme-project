---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "RAI du {{ substr .Name 0 10 }}"
type: "RAI"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- RAI
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- RAI
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

# Preparation
*Activité réalisé entre les deux CCB*

# CR
*Mettre une synthèse par acteurs*


