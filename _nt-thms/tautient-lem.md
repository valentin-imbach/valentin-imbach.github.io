---
label: tautient-lem
name: Tautient Function Lemma
dependencies:
  - tautient
---

For any positive integer $n$ we have

$$\sum_{\substack{d\in \mathbb{N}\\d\mid n}} \varphi(d) = n.$$

#### Proof.

Let $n$ be a positive integer and consider the sequence

$$\gcd(1,n), \gcd(2,n),\dots, \gcd(n,n)$$

and note that of these numbers is a positive divisor of $n$. For a positive divisor $d$ of $n$, denote by $a_d$ the number of times $d$ appears in the above sequence. Now note that $k$ is an integer with $1\leq k\leq n$ and $\gcd(k,n) = d$ if and only if
$d\mid k$ and $k/d$ is coprime to $n/d$. Conversely, if $t$ is an integer with $1\leq t\leq n/d$ coprime to $n/d$, then $\gcd(dt, n) = d$. Thus, $a_d = \varphi(n/d)$. Since the sum of the $a_d$ is $n$, we conclude that

$$\sum_{\substack{d\in \mathbb{N}\\d\mid n}} \varphi(d) = \sum_{\substack{d\in \mathbb{N}\\d\mid n}} \varphi(n/d) = n.$$