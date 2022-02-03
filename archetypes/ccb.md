---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "CCB du {{ substr .Name 0 10 }}"
type: "suivi"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- CCB
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- etude
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

*Objectifs : presenter les tickets et demande reçu depuis la dernière CCB*
*Debat sur les tickets reçu et priorisation des tickets*

# Preparation

# Objectifs

# Decisions



