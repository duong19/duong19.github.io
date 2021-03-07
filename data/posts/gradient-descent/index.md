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

In Mathematic, $x^{\\*}$ is a global minimum of a function $f$ defined on a domain $X$ if $f(x^{\\*}) \leq f(x)$ for all $x$ in $X$. If the domain $X$ is a metric space, then $f$ is said to have a **local minimum** point at the point $x^{\\*}$, if there exists some $ε > 0$ such that $f(x^{\\*}) \leq f(x)$ for all $x$ in $X$ within distance $ε$ of $x^{\\*}$. In others word, a **local minimum** $x^{\\*}$ of a function $f(x)$ is a point where $f'(x^{\\*}) = 0$.

The derivative of a function $f(x)$ with respect to the variable x is defined as:
$$
f'(x) = \lim_{x \rightarrow 0}{\dfrac{f(x+h) - f(x)}{h}}
$$


In Machine Learning and many optimization problems, we often want to find the value to minimize (or maximize) an objective function (or loss function). However, finding the global minimum of loss function in Machine Learning is intricate and sometimes, unfeasible. Alternatively, we normally consider the local minimum to be a "good enough" solution.

So the question is how do we find a local minimum? The most common approach is starting at a point considered to be the nearest point to the solution, then using an iterative algorithm to approach the desired point. One of the most used technique is **gradient descent**.



# 2. Gradient Descent

We know that a **local minimum** $x^{\\*}$ of function $f$ is a point at which $f'(x^{\\*}) = 0$. Suppose $x_t$ is the point we find after the $t^{th}$ loop, we need to find an algorithm to get $x_t$ as close to $x^*$ as possible. In the figure above, we notice that if $f'(x_t) > 0$, $x_t$ will be on the right side of $x^*$ (and vice versa). So in order for the next point to be closer to $x^*$, we need to move in the opposite direction of the gradient. 

$$
x_{t+1} = x_t + \Delta
$$

where $\Delta.f'(x_t) < 0$

Another observation is that the further $x_t$ from $x^*$, the greater $f'(x_t)$ become (and vice versa). Therefore, $\Delta$ needs to be in direct proportion with $-f'(x_t)$.


So we have **Gradient descent** for one variable:

$$
x_{t+1} = x_t - \eta f'(x_t)
$$
where $\eta > 0$ is called **learning rate**. 

Similarly for multiple variables:
$$
\theta_{t+1} = \theta_t - \nabla_{\theta}f(\theta_t)
$$

where $\theta$ is a vector.

# 3. Gradient descent variants
## Batch gradient descent

## Stochastic gradient descent

## Mini-batch gradient descent

# 4. Gradient descent optimization algorithms
## Momentum
## Adam


# Example
# References
[1]. [Blog Machine Learning cơ bản](https://machinelearningcoban.com/2017/01/12/gradientdescent/)

[2]. [An overview of gradient descent optimization algorithms](https://ruder.io/optimizing-gradient-descent/)

[3]. [Local minimum (Wikipedia)](https://en.wikipedia.org/wiki/Maxima_and_minima)

