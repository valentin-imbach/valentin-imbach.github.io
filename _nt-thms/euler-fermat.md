---
label: euler-fermat
name: Euler-Fermat Theorem
dependencies:
  - cong
  - tautient
---

Let $a, n$ be coprime integers with $n$ positive. It holds that

$$a^{\varphi(n)} \equiv 1 \pmod{n}.$$

#### Proof.
Let $a, n$ be coprime integers with $n$ positive. Let $S = \\{x_1, x_2, \dots x_{\varphi(n)}\\}$ be the set of positive intgegers at most $n$, coprime to $n$. If $ax_i \equiv ax_j \pmod{n}$, then since $a$ is coprime to $n$, we have $x_i \equiv x_j\pmod{n}$ and thus $i = j$. Hence, all the set $S' = \\{ax_1, ax_2, \dots ax_{\varphi(n)}\\}$ also has size $\varphi(n)$, with each element representing a different congruence class modulo $n$. But since both $a$ and all the $x_i$ are coprime to $n$, the congruence classes represented by the elements of $S$ and $S'$ are the same. Thus, taking the product of each set we find

$$x_1x_2\cdots x_{\varphi(n)} \equiv (ax_1)(ax_2)\cdots (ax_{\varphi(n)}) = a^{\varphi(n)}\cdot x_1x_2\cdots x_{\varphi(n)} \pmod{n}$$

and sincethe product of the $x_i$ is coprime to $n$, we can cancel this term on both sides of the congruence, arriving at the desired result.