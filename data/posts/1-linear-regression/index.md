---
date: 2021-02-03T06:55:13.201Z
series: Machine Learning
title: 1. Linear Regression
description: "In the first blog post of this series, we will discuss some basic
  concepts of Machine Learning and go into the first Machine Learning algorithm:
  Linear Regression."
keyword:
  - machine-learning
  - linear-regression
  - supervised-learning
---
## Introduction to Machine Learning algorithms

Machine Learning algorithms are classified based on:

* **Learning style**:

  * Semi-supervised learning
  * Reinforcement learning
  * Supervised Learning
  * Unsupervised Learning
* **Function**:

  * Regression Algorithms
  * Classification Algorithms
  * Instance-based Algorithms
  * Regularization Algorithms
  * Bayesian Algorithms
  * Clustering Algorithms
  * Artificial Neural Network Algorithms
  * Dimensionality Reduction Algorithms
  * Ensemble Algorithms

## Linear Regression

### 1. Introduction
We begin with a simple real-world problem: suppose we have collected


### 2. Algorithm Analysis

$$
\hat{Y} = \hat{\beta_0} + \sum_{n=1}^{p}{X_j\hat{\beta_j}}
$$

$$
Y \approx X^{T}\hat{\beta}  = \hat{Y}
$$

$$
RSS(\beta) = \frac{1}{2}\sum_{i=1}^{N}(y_i - x_i^T\beta)^2
$$

$$
RSS(\beta) = \frac{1}{2}(\bold{y} - \bold{X}\beta)^T(\bold{y} - \bold{X}\beta)
$$

$$
\hat\beta = (\bold{X}^T\bold{X})^{-1}\bold{X}^T\bold{y} 
$$
### 3. Example
## References

1. [The Elements of Statistical Learning (2nd Edition)](https://web.stanford.edu/~hastie/Papers/ESLII.pdf)
2. [Blog Machine Learning cơ bản](https://machinelearningcoban.com/2016/12/28/linearregression/)
3. [Stanford CS229: Machine Learning (Autumn 2018)](http://cs229.stanford.edu/)