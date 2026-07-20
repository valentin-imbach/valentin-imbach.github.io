---
layout: page
title: Ultimate Tournaments
---

This is an incomplete list of ultimate tournaments, championships and leagues I have played in over the years.
There are currently **{{ site.data.ultimate | size }}** events listed below.

<div class="tournaments">
    {% assign sorted = site.data.ultimate | sort: 'year' | reverse %}
    {% for tour in sorted %}
    <div>{{ tour.year }}</div>
    <div>
        <p>{{ tour.name }}</p>
        <p>{{ tour.club }}</p>
        <p>{{ tour.team }}</p>
    </div>
    {% endfor %}
</div>
