---
date: 2021-04-16T14:24:46.023Z
series: Machine Learning
title: Maximum Likelihood, Maximum a Posterior
description: A frequentist approach in stastical models.
keyword:
  - machine-learning
  - statistic
  - mle
---
# Maximum Likelihood Estimator

Supposed we have a dataset $ \bm{D = (x_1, x_2, ..., x_N)}$ of $\bm{N}$ observation and we want to recover the probability distribution that may have generated this dataset (or the **likelihood** of the dataset):
$$
\bm{p(D|w) = p(x_1, x_2, ...,x_N|w)}  \tag 1
$$
where $\bm w$ is a set of parameters.

## Maximum Likelihood principle:

The maximum likelihood estimator for $ \bm w $ is defined as:

$$
\bm{w = \argmax_{w}p(D|w) = \argmax*{w}p(x_1, x_2, ..., x_N|w)} \tag 2
$$

But at first, we have to make an assumption that each $x_i \in \bm D$ is independently distributed according to same distribution, conditioned on $\bm w$. By doing that, we can rewrite $(1)$ as:

$$ 
\bm{p(x*1, x_2, ...,x_N|w) \approx \prod_{n=1}^{N} p(x_n|w)} 
$$

So instead of optimizing $(2)$, we are going to optimize:

$$
\bm{w = \argmax_{w}\prod_{n=1}^{N} p(x_n|w)}
$$

This product of probability is inconvenient due to the numerical overflow problem ( because $p(x_i | w)$ value is in range [0,1]). We notice that taking the logarithm of the likelihood will not only preserve its $\argmax$, but also transform a product into a sum:

$$
\bm{w = \argmax_{w}\sum_{n=1}^{N} log(p(x_n|w))}
$$
## Example

# Maximum a Posterior