---
date: 2021-04-16T14:24:46.023Z
series: Machine Learning
title: Maximum Likelihood, Maximum a Posterior and Bayesian Prediction
description: Parameters estimation methods in stastical models.
keyword:
  - machine-learning
  - statistic
  - mle
---
## Maximum Likelihood Estimator

Supposed we have a dataset $ \bm{D = (x_1, x_2, ..., x_N)}$ of $\bm{N}$ observation and we want to recover the probability distribution that may have generated this dataset (or the **likelihood** of the dataset):
$$
\bm{p(D|w) = p(x_1, x_2, ...,x_N|w)} 
$$
where $\bm w$ is a set of parameters.

**Maximum Likelihood principle**:

$$
\bm{w = \argmax_{w}p(D|w) = \argmax_{w}p(x_1, x_2, ..., x_N|w)}
$$

$$ 
\bm{p(x_1, x_2, ...,x_N|w) \approx \prod_{n=1}^{N} p(x_n|w)}
$$ 




