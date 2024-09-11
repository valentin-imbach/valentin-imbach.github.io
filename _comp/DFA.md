---
name: Deterministic Finite Automaton
---
A deterministic finite automaton $D$ is a tuple $(\Sigma, S, q, \delta, F)$ where:
- $\Sigma$ is a finite alphabet,
- $S$ is a finite set of *states*,
- $q\in S$ is the *initial state*,
- $\delta:S\times \Sigma\to S$ is the *transition function*,
- $F \subseteq S$ is the set of *accepting states*.

We define the *extended transition function* $\hat{\delta}:S\times\Sigma^*\to S$ of $D$ by setting $\hat{\delta}(s, \varepsilon) = s$ and
$$\hat{\delta}(s,wa) = \delta(\hat{\delta}(s,w),a)$$
for any $s\in S$, any $w\in \Sigma^*$ and any $a\in \Sigma$.

We say that $D$ *accepts the word* $w\in \Sigma^*$ if $\hat{\delta}(q, w)\in F$.

We say that $D$ *accepts the language* $L\subseteq \Sigma^*$ if $L$ is the set of exactly those words accepted by $D$. We denote this unique language by $L(D)$.

We call a language $L\subseteq \Sigma^*$ *regular* if there is some deterministic finite automata that accapts $L.$