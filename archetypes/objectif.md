---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "Objectif Semaine SXX"
type: "objectif"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- OBJECTIF
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- OBJECTIF
---
# {{% param "description" %}}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

## Constat semaine N-1

### DT

### CyberReferent

### KAST

### Sesame

### Ragnarok

### AMF

## Objectif Semaine N

### DT

### CyberReferent

### KAST

### Sesame

### Ragnarok

### AMF

## Points DUR
