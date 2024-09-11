---
name: Regular Expressions are Regular
---

The languages given by regular expressions are exactly the reagular langauges.

**Proof.**
We first show that any language given by a RE is regular. Let $R$ be a regular expression over some alphabet $\Sigma$ and proceed by induction on the length of $R$. If $R = \varepsilon$, $R = \varnothing$ or $R = a$ for some $a\in \Sigma$, the corresponding language is celarly regular. Otherwise, either $R = (R_1*)$, $R = (R_1R_2)$ or $R = (R_1+R_2)$ where $R_1$ and $R_2$ are regular expressions strictly shorter than $R$. Thus, by the induction hypothesis they correspond to regular languages and since the regular languages are closed under the operatiosn of Kleene star, concatination and union, we conclude that $L(R)$ is regular.

<!-- It reamins to show that any regular language has a corresponding RE. Let $L$ be a regular language accepted by the DFA $D = (\Sigma, S, q, \delta, F)$ and proceed by induction on $|S|$. If $|S| = 1$, we must have $S = \{q\}$ and $\delta(q, a) = q$ for all $a\in \Sigma$. Thus, depending on whether $q\in F$ or not, the only two possibilities for $L(D)$ are $\Sigma$ and $\varnothing$. Both of these have corresponding REs, in particular $R = \varnothing$ and $R = (a_1 + a_2 + \cdots + a_n)*$ would do, where $a_1,a_2,\dots, a_n$ is an enumeration of $\Sigma$. Now consider the case where $|S| \geq 2$ and pick any $s\in S$. -->

It reamins to show that any regular language has a corresponding RE. Let $L$ be a regular language accepted by some NFA $N = (\Sigma, S, q, \delta, F)$. We proceed by induction on
$$T(N) = \sum_{s\in S}\sum_{a\in\Sigma\cup \{\varepsilon\}}|\delta(s,a)|.$$
If $T(N) = 0$, depending on whether $q\in F$ or not, we have $L = \{\varepsilon\}$ or $L = \varnothing$. Both of these languages have corresponding REs. If $T(D) > 0$, there are some $s,t\in S$ and $a\in \Sigma\cup \{\varepsilon\}$ with $t\in \delta(s,a)$. Now consider the NFA $N_0 = (\Sigma, S, q, \delta', F)$ where
$$\delta'(s,a) = \delta(s,a)\setminus \{t\}$$
and $\delta' = \delta$ everywhere else. Also define NFAs
- $N_1 = (\Sigma, S, q, \delta', \{s\})$,
- $N_2 = (\Sigma, S, t, \delta', \{s\})$,
- $N_3 = (\Sigma, S, t, \delta', F)$.

Now note that any word $w\in L(N)$ is either in $L(N_0)$, or it is of the form $w_1a(w_2a)^*w_3$ where $w_i\in L(N_i)$ for $i = 1,2,3$. Since $T$ takes a smaller value on all four newly defined NFAs, by the induction hypothesis there are REs $R_i$ with $L(R_i) = L(N_i)$ for $i = 1,2,3,4$. We concldue that the RE $R_0 + R_1a(R_2a)*R_3$ corresponds to the language $L(N)$.

<!-- For any non-empty $Q\subseteq S$ and $s,t\in Q$, let $\pi(s,t,Q)$ be the language of exactly those words $w\in \Sigma^*$ such that $\hat{\delta}(s,w) = t$ and $\hat{\delta}(s,w')\in Q$ for all prefixes $w'$ of $w$. We prove that this language corresponds to a RE, by induction on $|Q|$. If $|Q| = 1$, we must have $s = t$ and

$$\pi(s,s,\{s\}) = L((a_1+a_2+\cdots+a_n)*)$$
where $a_1,a_2,\dots, a_n$ is an enumeration of the elements $a\in Sigma$ with $\delta(s,a) = s$. If there are no such elements, the RE $\varepsilon$ will do. If $|Q| \geq 2$, note that now
$$\pi(s,t,Q) = \bigcup_{a\in\Sigma}a\pi(\delta(s,a), t)$$

 -->

