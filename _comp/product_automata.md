---
Product of Deterministic Finite Automata
---
Let $D_1 = (\Sigma, S_1, q_1, \delta_1, F_1)$ and $D_2 = (\Sigma, S_2, q_2, \delta_2, F_2)$ be two deterministic finite automata over the same alphabet $\Sigma$. We define a *(deterministic finite) product automaton* of $A_1$ and $A_2$ as a determinsitic fintie automaton with
- alphabet $\Sigma$
- states $S_1\times S_2$
- initial state $(q_1, q_2)$
- transition function $\delta: (S_1\times S_2)\times \Sigma \to (S_1\times S_2)$ given by
$$\delta((s_1,s_2), a) = (\delta_1(s_1, a), \delta_2(s_2, a))$$
- final states $F \subseteq S_1\times S_2$
