---
layout: Work
org: Noted Ltd
year: 2023-2024
sort: 1
title: Noted Components - Component Library
menu: work
thumbnail: /work-media/noted-components-thumb.webp
thumbnailOrientation: landscape
published: false
tasks:
  - Frontend Dev
  - Design System
technologies:
  top:
    - React
    - React Aria
    - TypeScript
  additional:
    - SCSS
summary: A shared component library and design system for the Noted platform
---

Noted Components is the shared component library and design system behind Noted,
a clinical notes and case management platform used by health and social service providers.
It became the foundation the product's frontend was built on, but it didn't start that way.

## How It Started

When I joined, the team's principal developer built almost all UI from a small set
of styled primitives, buttons, headings and form inputs, and preferred to keep it that way.
I could see we'd move faster and stay more consistent with a set of higher-level
shared components on top of those.
When I first raised it, I was turned down.

I didn't want to let it drop, so rather than push the same argument again
I took it to our development manager.
They set up a conversation with the whole frontend and full-stack group
and framed it through atomic design,
which gave everyone a shared language: what I was proposing was really molecule
and organism level components sitting on top of the primitives we already had.

With that framing, the real concern surfaced.
The hesitation wasn't about shared components as such.
It came from a past experience with an in-house library
where each component took so many configuration props
that it was hard to know how to get what you wanted out of it.
Once I understood that, we could design around it instead of talking past each other.
We landed on an approach that met everyone's objectives,
and it set the principles the whole system was built on.

## Design Principles

Two rules shaped everything after.
Favour composition over configuration, so components combine and nest
rather than growing a new prop for every variation.
And where a component genuinely needs variations,
expose them through a single `variant` prop so the interface stays predictable.
That pattern runs through the whole system.
Formatted Name switches between legal, full, preferred and short from one variant prop.
Alert and Button use the same approach for their default, success, warning and danger styles.

<jc-gallery>
<jc-mockup type="desktop">
  <img title="Notes Component library Alerts components" src="/work-media/Noted-Components-Alerts.webp">
</jc-mockup>
</jc-gallery>

## Built on React Aria

We built the system on React Aria's base components,
so keyboard interaction, focus management and screen reader behaviour came from
a well tested foundation instead of being re-solved for each component.
On top of that we handled states like disabled, loading and aria-current consistently,
so a component behaves the same way wherever it turns up.

## Accessibility

Accessibility was built into the system rather than checked at the end.
The theme colours each carry their own guidance:
every swatch shows which text colour it meets contrast requirements against,
so an accessible combination is the default a developer reaches for.
The component documentation also has accessibility checking built in for testing as you go.

## Responsive by Default

The collection components adapt to screen size from the same markup.
The grid list table lays out as stacked cards on small screens
and switches to a full table on larger ones,
and still supports custom column widths, filtering, sorting, linked rows and row actions.

## In the Library

The library covers content components for consistent display
(alerts, badges, headings, and formatted names, addresses and messages,
with preferred names and pronoun support),
collection components (grid lists, tables, list boxes and tag lists),
and the usual forms, layout, navigation and overlay components.
Each is documented with live examples and its props.
