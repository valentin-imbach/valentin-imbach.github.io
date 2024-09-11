---
label: padic-props
name: Properties of the $p$-adic Valuation
dependencies:
  - padic-val
---

Let $a,b$ be non-zero integers and $p$ a prime. The following hold:

1. $v_p(ab) = v_p(a) + v_p(b)$
2. $v_p(a\pm b) \geq \min(v_p(a), v_p(b))$ with equality if $v_p(a)\neq v_p(b)$
3. $v_p(a) \leq \log_p(\|a\|)$ with equality if and only if $a$ is a power of $p$

#### Proof.
Let $\alpha = v_p(a)$ and $\beta = v_p(b)$. We have $p^\alpha\mid a$ and $p^\beta\mid b$, hence $p^{\alpha+\beta}\mid ab$. Moreover, if $p^k\mid ab$ with $k > \alpha + \beta$, then $p\mid p^{k-\alpha-\beta}\mid (a/p^\alpha)(b/p^\beta)$ implying that either $p\mid a/p^\alpha$ or $p\mid b/p^\beta$ which is not th case. Thus we conclude $v_p(ab) = \alpha + \beta$. Also note that if $\gamma = \min(\alpha,\beta)$, then $p^\gamma\mid a,b$ and thus also $p^\gamma\mid a\pm b$ implying $v_p(a\pm b)\geq \gamma$. If $\alpha \neq \beta$ then without loss of generality assume that $\alpha \geq \gamma + 1$, thus $p^{\gamma + 1}\mid a$ but $p^{\gamma+1}\nmid b$. We conclude that $p^{\gamma+1}\nmid a\pm b$, hence $v_p(a\pm b) = \gamma$ in this case. For the last propery, note that $p^\alpha\mid a$ implies $p^\alpha\leq |a|$ since $a\neq 0$, and taaking logarithms to the base $p$ of both sides gives the desired inequlity.