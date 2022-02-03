---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "Fiche de reference sur {{ delimit (split (substr .Name  17) "-" | first 1) "" | upper }}"
type: "reference"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- REFERENCE
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- REFERENCE
---
# {{% param "description" %}}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

*L'objectif d'une note de reference est de mettre en place une nomenclature ou une organisation pour un outil interne*




