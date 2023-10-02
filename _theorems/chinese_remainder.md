---
name: Chinese Remainder Theorem
---

Let $a_1, a_2, \dots, a_r$ be integers and $n_1, n_2,\dots, n_r$ pairwise coprime integers. Then, the system of congruneces

$$x \equiv a_1\pmod{n_1}$$

$$x \equiv a_2\pmod{n_2}$$

$$\vdots$$

$$x \equiv a_r\pmod{n_r}$$

has a unique solution modul $n_1n_2\cdots n_r$.

#### Proof

Let $N = n_1n_2\cdots n_r$ and for each $1\leq i\leq r$ we set $u_i = N/n_i$. Now $u_i$ is coprime with $n_i$, so there is a multiplicative inverse of $u_i$ modulo $n_i$, call it $v_i$. Set $w_i = u_iv_i$. By construction we now have

$$w_i \equiv\begin{cases}
0 \pmod{n_j} \text{ for } j \neq i\\
1 \pmod {n_i}
\end{cases}.$$

Now consider $x = a_1w_1 + a_2w_2 + \cdots + a_rw_r$. By the above propery of the $w_i$, we find that $x\equiv a_i\pmod{n_i}$ for all $1\leq i\leq r$. To show uniqueness of the solution modulo $N$, consider two solutions $x$ and $y$. We must have $n_i\mid x-y$ for all $i$, and since the $n_i$ are coprime it follows that $N = n_1n_2\cdots n_r\mid x-y$, hence $x\equiv y\pmod{N}$.