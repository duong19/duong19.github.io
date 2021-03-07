---
date: 2021-03-07T04:49:28.520Z
series: Machine Learning
title: Logistic Regression
description: A statiscal method for clasification task.
keyword:
  - supervised-learning
  - clasification
  - machine-learning
---
# Introduction
### Logistic regression model

$$
f(\mathbf{x) = \theta(w^Tx)}
$$
### Sigmoid function

$$
f(\mathbf{s) = \frac{1}{1 + e^{-s}} \triangleq \sigma(s)}
$$
$$
\lim_{x \rarr -\infty}\sigma(s) = 0; \lim_{x \rarr +\infty}\sigma(s) = 1
$$


# Mathematical analysis

$$
\mathbf{P(y_i = 1|x_i;w) = f(w^Tx_i)}
$$
$$
\mathbf{P(y_i = 0|x_i;w) = 1 - f(w^Tx_i})
$$
$$
\mathbf{P(y_i|x_i;w) = z_i^{y_i}(1 - z_i)^{1-y_i}}
$$
# References