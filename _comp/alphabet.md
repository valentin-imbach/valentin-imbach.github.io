---
name: Alphabet
---

An *alphabet* is a non-empty set of formal symbols.

A *word* $w$ *over* an alphabet $\Sigma$ is a finite sequence of symbols from $\Sigma$. The *length* of $w$ is the number of symbols it contains. The *empty word* is the unique word of length $0$, usually denoted by $\verepsilon$. We use a single symbol $a\in \Sigma$ interchnagably with the word containing only the symbol $a$.

For two words $w_1$ and $w_2$ over an alphabet $\Sigma$, we define their *concatination*, denoted by $w_1w_2$, as the word obtained by joining $w_1$ and $w_2$ together. 

A *language* over some alphabet $\Sigma$ is a set of words over $\Sigma$. For two languages $L_1$ and $L_2$, we define their *concatination* by
$$L_1L_2 = \{w_1w_2 : w_1\in L_1, w_2\in L_2\}.$$

Furthermore, for some language $L$, we define
$$L^n = \underbrace{LLL\cdots L}_n$$
for any non-negative integer $n$, and
$$L^* = \bigcup_{i = 0}^\infty L^i.$$

We also extend the above definitions to any alphabet $\Sigma$, viewing it interchnagably with the language of words over $\Sigma$ consisting of a single letter.