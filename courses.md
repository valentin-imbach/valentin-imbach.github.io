---
layout: page
title: Courses
---

This is a coprehensive list of lectures I attended as part of my studies in the Matheamtical Tripos at Cambridge University.

<style>
#lecture-div {
	display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
</style>

<div id = "lecture-div">
	{% for year in site.data.lectures %}
	<div>
		<bf>{{ year.year }}</bf>
		<ul>
		{% for course in year.courses %}
			<li>{{ course }}</li>
		{% endfor %}
		</ul>
	</div>
	{% endfor %}

*partially or recreationally attended