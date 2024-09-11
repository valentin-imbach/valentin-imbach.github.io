---
name: Nondeterministic Finite Automaton
---
A nondeterministic finite automaton $N$ is a tuple $(\Sigma, S, q, \delta, F)$ where:
- $\Sigma$ is a finite alphabet,
- $S$ is a finite set of *states*,
- $q\in S$ is the *initial state*,
- $\delta:S\times (\Sigma\cup \{\varepsilon \})\to \mathcal{P}(S)$ is the *transition function*,
- $F \subseteq S$ is the set of *accepting states*.

We define the *epsilon closure* of a set of states $Q$, denoted by $E(Q)$, as the smalles set of states satisfying
$Q\subseteq E(Q)$ and $s\in E(Q) \implies \delta(s,\varepsilon) \subseteq E(Q)$ for all $s\in S$.

We define the *extended transition function* $\hat{\delta}:S\times\Sigma^*\to \mathcal{P}(S)$ of $N$ by setting $\hat{\delta}(s, \varepsilon) = E(\{s\})$ and
$$\hat{\delta}(s,wa) = \bigcup_{t\in \hat{\delta}(s, w)} E(\delta(t, a))$$
for any $s\in S$, any $w\in \Sigma^*$ and any $a\in \Sigma$.

We say that $N$ *accepts the word* $w\in \Sigma^*$ if $\hat{\delta}(\{q\}, w)\cap F \neq \varnothing$.

We say that $N$ *accepts the language* $L\subseteq \Sigma^*$ if $L$ is the set of exactly those words accepted by $N$. We denote this unique language by $L(N)$.

 