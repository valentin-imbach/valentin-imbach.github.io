---
label: lte
name: Lifting the Exponent Lemma
dependencies:
  - padic-props
---

Let $a,b,n$ be integers with $n$ positive and let $p$ an odd prime with $p\mid a+b$ but $p\nmid a,b$. We have

$$v_p(a^n - b^n) = v_p(a-b) + v_p(n).$$


#### Proof.
Let $a,b,n$ be integers with $n$ positive and let $p$ an odd prime with $p\mid a-b$ but $p\nmid a,b$. Note that

$$a^n - b^n = (a-b)(a^{n-1}+a^{n-2}b+\cdots + ab^{n-2}+b^{n-1})$$

and using the properties of the $p$-adic valuation it suffices to show that

$$v_p(a^{n-1}+a^{n-2}b+\cdots + ab^{n-2}+b^{n-1}) = v_p(n).$$

since $p\mid a-b$ we have $a\equiv b\pmod{p}$ and hence

$$a^{n-1}+a^{n-2}b+\cdots + ab^{n-2}+b^{n-1} \equiv a^{n-1}+a^{n-1}+\cdots + a^{n-1}+a^{n-1} = na^{n-1}.$$

If $p\nmid n$, the above is enought to conclude. Moreover, if $n=p$ then writing $b = a + kp$ for some integer $k$, we find that

$$a^{p-1}+a^{p-2}b+\cdots + ab^{p-2}+b^{p-1} \equiv pa^{n-1} + (1+2+\cdots + (p-1))kpa^{p-2} \equiv pa^{n-1},\pmod{p^2}$$

using the fact that $b^t = (a + kp)^t \equiv a^t + tkp a^{t-1}\pmod{p^2}$ for all positive integers $t$. Thus, since $p\nmid a$, the case $n=1$ is also done. Now we induct on $v_p(n)$, with the base case $v_p(n) = 0$ treated above, hence assume that $v_p(n) > 1$ and thus $p\mid n$. Using the case $n=p$ together with the induction hypothesis and the fact that $v_p(n/p) = v_p(n)-1 < v_p(n)$, we conclude that

$$v_p(a^n-b^n) = v_p((a^p)^{n/p} - (b^p)^{n/p}) = v_p(a^p-b^p) + v_p(n/p) = (v_p(a-b) + v_p(p)) + (v_p(n) - v_p(p)) = v_p(a-b)+v_p(n).$$