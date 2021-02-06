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
We begin with a simple real-world problem: suppose we have collected a dataset of houses (sizes, number of bedrooms, etc) and their prices. The question is when we have data of a new house, how do we make a prediction of its price?

First, let's consider the process of supervised learning in that problem: we have a **training set** fed to a **learning algorithm** which then will output a **function** (or a hypothesis). The job of the function is mapping the data of a new house to its estimated price.

For example, we want to predict the price of a house that has a size of $\bold{x_1}$ $\small m^2 $, possesses $\bold{x_2}$ bedrooms and is $\bold{x_3}$ $\small km $ away from the city center. Can we infer from the dataset that we mentioned above? If we can, then what is the form of the function $\bold{y = f(x)}$? In this example, $\bold{x = [x_1, x_2, x_3]}$ is a row vector, $\bold{y}$ is a scalar (the price of the house).

A simple function can describe the relationship between $x_1, x_2,x_3$ and $y$:
$$
y \approx f(x)  = \hat{y}
$$

$$
f(x) = \beta_0 + \beta_1x_1 + \beta_2x_2 + \beta_3x_3
$$

where $\beta_0, \beta_1, \beta_2, \beta_3$ is the parameters we need to optimize. This problem is known as *Linear Regression*.



### 2. Algorithm Analysis

Given a vector of inputs $X^T = (X_1, X_2, ..., X_p)$, we predict the output $Y $via the model:

$$
\hat{Y} = \hat{\beta_0} + \sum_{n=1}^{p}{X_j\hat{\beta_j}}
$$
where the term $\hat\beta_0$ is known as *bias* in machine learning. Often it is convenient to include the constant variable 1 in $X$, include $\hat\beta_0$ in
the vector of coefficients $\hat\beta$, and then write the linear model in vector form as an inner product:

$$
Y \approx X^{T}\hat{\beta}  = \hat{Y}
$$

where $X^T$ denotes vector or matrix transpose ($X$ being a column vector).
Here we are modeling a single output, so $\hat Y$ is a scalar; in general $\hat Y$ can be a K–vector, in which case $\beta$ would be a $p×K$ matrix of coefficients

How do we fit the linear model to a set of training data? There are
many different methods, but by far the most popular is the method of
least squares. In this approach, we pick the coefficients $\beta$ to minimize the
residual sum of squares:

$$
RSS(\beta) = \frac{1}{2}\sum_{i=1}^{N}(y_i - x_i^T\beta)^2
$$
where $(x_i,y_i)$ is a (input, outcome)

We can write in matrix notation:

$$
RSS(\beta) = \frac{1}{2}(\bold{y} - \bold{X}\beta)^T(\bold{y} - \bold{X}\beta)
$$

where $X$ is an $N × p$ matrix with each row an input vector, and $y$ is an
$N$-vector of the outputs in the training set. 

$$
\hat\beta = \argmin_\beta RSS(\beta)
$$

Differentiating w.r.t. $\beta$, we get the solution ($\bold{X}^T\bold{X}$ need to be non-singular):

$$
\hat\beta = (\bold{X}^T\bold{X})^{-1}\bold{X}^T\bold{y} 
$$
### 3. Example
## References

1. [The Elements of Statistical Learning (2nd Edition)](https://web.stanford.edu/~hastie/Papers/ESLII.pdf)
2. [Blog Machine Learning cơ bản](https://machinelearningcoban.com/2016/12/28/linearregression/)
3. [Stanford CS229: Machine Learning (Autumn 2018)](http://cs229.stanford.edu/)