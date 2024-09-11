---
name: The Real Numbers
---

The real numbers are a metric space, with canonical metric $d:\mathbb{R}\times\mathbb{R}\to\mathbb{R}$ given by $d(x,y) = |x-y|$.

#### Proof.
For all $x,y,z\in\mathbb{R}$ we have
- $|x-y| \geq 0$ with equality if and only if $x=y$
- $|x-y| = |y-x|$
- $|x-y| \leq |x-z| + |z-y|$
the latter of which follows trivially by case distinction on the sign of $x-z$ and $z-y$.