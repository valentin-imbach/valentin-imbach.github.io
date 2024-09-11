---
name: NFAs accept Regular Languages
---

The languages accepted by the noneterministic finite automata are exactly the regular languages.

**proof.**
We first prove that every regular langauge is accepted by some NFA. Given a regular langauge $L$, let $D = (\Sigma, S, q, \delta, F)$ be a DFA that accepts $L$. Now consider the NFA $N = (\Sigma, S, q, \delta', F)$ where $\delta':S\times(\Sigma\cup\{\varepsilon\} \to \mathcal{P}(S)$ is given by $\delta'(s, \varepsilon) = \varnothing$ and
$$\delta'(s, a) = \{\delta(s, a)\}$$
for all $s\in S$ and any $a\in \Sigma$. It follows that the extended transition functions of $N$ agrees with the one of $D$, implying that $L(N) = L(D) = L$.

We now show that every langauge accepted by a NFA is regular. Let $N = (\Sigma, S, q, \delta, F)$ be any NFA. We define the DFA $D = (\Sigma, \mathcal{P}(S), E(\{q\}), \delta', F')$, where
- $E$ denotes the epsilon closure in $N$,
- $\delta':\mathcal{P}(S)\times\Sigma\to \mathcal{P}(S)$ defined by
$$\delta'(T, a) = \bigcup_{s\in T}E(\delta(s, a))$$
for every $T\in \mathcal{P}(S)$ and any $a\in \Sigma$,
- $F' = \{T\in \mathcal{P}(S) : T\cap F\neq \varnothing\}$.

Now a quick induction shows that $\hat{\delta'}(s, w) = \hat{\delta}(s, w)$ for any $s\in S$ and $w\in \Sigma^*$. In particular this holds for $s = q$, implying together with the defintion of $F'$ that $N$ accepts $w$ if and only if $D$ accepts $w$. Thus, we have $L(N) = L(D)$ is regular.