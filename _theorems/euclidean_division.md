---
name: Euclidean Division
---

Let $a,b$ be integers with $b\neq 0$. There exists unique integers $q,r$ satisfying

$$a = qb + r \text{ and } 0 \leq r < \|b\| .$$

#### Proof.
Let $a,b$ be integers with $b\neq 0$. Consider the set

$$S = \{r\in\mathbb{N}\cup\{0\} : \exists\ q\in\mathbb{Z}\ a = qb + r\}$$

which is non-empty since for $q \leq a/b$ we have $a-qb \in S$. Thus, by the well-ordering prionciple, there is a least integer $r\in S$ with $r = a - qb$ for some integer $q$. If $r \geq \|b\|$, then $r - \|b\| = a - (q\pm 1)b \in S$, contradicting minimality of $r$. Hence, $0\leq r < \|b\|$. For uniqueness, let $q',r'$ be integers that also satisfy the conditions. Now,
$qb + r = a = q'b + r$ and hence $(q-q')b = r-r'$. It follows that $b\mid r-r'$, but since $0\leq r,r' < \|b\|$ this implies $r = r'$. Hence also $q = (a - r)/b = (a-r')/b = q'$.