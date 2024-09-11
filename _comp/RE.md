---
name: Regular Expression
---

A *regular expression* (RE) $R$ over the alphabet $\Sigma$ is a word over the alphabet $\Sigma \cup \{(,),+,*,\varepsilon,\varnothing\}$ that correspons to a unique language $L(R)$ over $\Sigma$. We define these expressions recursively: For a regular expression $R$ we either have
- $R = \varnothing$, corresponding to the language \{\}
- $R = \varepsilon$, corresponding to the language $\{\varepsilon\}$
- $R = a$ for some $a\in\Sigma$, correspinding to the language \{a\}
- $R = (R_1*)$ for some RE $R_1$, corresponding to the language $L(R_1)^*$
- $R = (R_1R_2)$ for some REs $R_1$ and $R_2$, corresponding to the language $L(R_1)L(R_2)$
- $R = (R_1+R_2)$ for some REs $R_1$ and $R_2$, corresponding to the language $L(R_1)\cup L(R_2)$

To avoid overuse of parenthesis, we asign precidence to the above rules in the order they are listed, highest priority to lowest. 