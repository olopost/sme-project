---
project: "{{ .Dir | path.Base | humanize | title }}"
description: "Reunion du {{ substr .Name 0 10 }} - projet : {{ .Dir | path.Base | humanize | title }}"
type: "reunion"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- COPIL
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- reunion
---

# {{ substr .Name  11 -10 | humanize | title }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Participants

## Ordre du jours

## Note

