---
project: {{ delimit (split (substr .Name  17) "-" | first 1) "" | humanize   }}
description: "COPIL du {{ substr .Name 0 10 }}"
type: "copil"
date: {{ substr .Name 0 10 }}
time: "{{ replace (substr .Name 11 5) "-" ":" }}"
toc: false
tags:
- COPIL
{{ range (split (substr .Name  17) "-" )}}- {{ . | upper }}
{{ end }}
categories:
- COPIL
---
# {{ delimit (split (substr .Name  17) "-" | first 2) " - " | humanize   }}

**Date:** {{ dateFormat "2 January 2006" (substr .Name 0 10) }}, {{ replace (substr .Name 11 5) "-" ":" }}

*Objectifs: Presenter l'avancement et faire un retour sur les difficultés*

# Preparation


# Synthese des activités

# Difficulté

# Impact sur le planning

# Actions due


