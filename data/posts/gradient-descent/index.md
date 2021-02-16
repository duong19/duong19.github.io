---
date: 2021-02-08T16:40:08.581Z
series: Machine Learning
title: Gradient Descent
description: The most common algorithm to perform optimization.
keyword:
  - machine-learning
  - gradient-descent
  - optimization
---
# 1. Introduction

<img src="http://mathonline.wdfiles.com/local--files/local-maxima-and-minima-and-absolute-maxima-and-minima/Screen%20Shot%202014-08-31%20at%202.33.00%20PM.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;"></img>

In Mathematic, $x{^\*}$ is a global minimum of a function $f$ defined on a domain $X$ if $f(x^\*) \leq f(x)$ for all $x$ in $X$. If the domain $X$ is a metric space, then $f$ is said to have a **local minimum** point at the point $x^∗$, if there exists some $ε > 0$ such that $f(x^∗) \leq f(x)$ for all $x$ in $X$ within distance $ε$ of $x^\*$. In others word, a **local minimum** of a function is a point where the function value is smaller than at nearby points, but possibly greater than at a distant point.

In Machine Learning and many optimization problems, we often want to find the value to minimize (or maximize) an objective function (or loss function). However, finding the global minimum of loss function in Machine Learning is intricate and sometimes, unfeasible. Alternatively, we normally consider the local minimum to be a "good enough" solution.

# 2. Gradient Descent

**Gradient Descent** for one variable:

$$
x_{t+1} = x_t - \eta f'(x_t)
$$

**Gradient descent** for multiple variables:
$$
\theta_{t+1} = \theta_t - \nabla_{\theta}f(\theta_t)
$$

# 3. Example