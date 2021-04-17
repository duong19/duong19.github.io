---
date: 2021-02-09T11:53:48.770Z
series: Machine Learning
title: K-means Clustering
description: One of the most well-known unsupervised learning algorithm.
keyword:
  - machine-learning
  - kmeans
  - unsupervised-learning
---
## 1. Introduction
**K-means clustering** is one of the most well-known clustering algorithms in Unsupervised Learning. When I was new in this field, this is the first algorithm I'd ever learnt.

Unlike **Linear Regeression**, we don't know the label of each data point in K-means. Instead, this algorithm aims to partition data into clusters so that every data point in the same cluster is similar to each other in some way.
## 2. Algorithm Analysis

Supposed we have $N$ data points $\bm{ X = [x_1, x_2, ..., x_n ] \in R^K}$ with $\bm{K<N}$, we need to find $\bm K$ centers ($\bold{m_1, m_2, ..., m_K}$)

Supposed $\bm x_i$ was assigned to cluster $\bm K$,  $\bm{y_i = [y_{i1}, y_{i2}, ..., y_{iK}]}$ is the label vector of data point $\bm{x_i}$ where $\bm{y_{ik}} = 1$ and $\bm{y_{ij}} = 0$ $({\forall j  \not = k}; 1 < j,k < K)$. This is called *one-hot encoding.*
$$
\tag{1} \bm{\sum_{k=1}^K y_{ik} = 1,\ \   y_{ik} \isin \text{\textbraceleft}0,1\text{\textbraceright}}
$$
### Loss function
$$
\bm{\text{\textbardbl}x_i -m_k \text{\textbardbl}_{2}^{2}}
$$

$$
\bm{  y_{ik}\text{\textbardbl}x_i -m_k\text{\textbardbl}_{2}^{2} = \sum_{j=1}^K{y}_{ij}\text{\textbardbl}x_i -m_j\text{\textbardbl}_{2}^{2} }
$$

Hello

$$

\bm {J = \sum_{i=1}^N\sum_{j=1}^K{y}_{ij}\text{\textbardbl}x_i -m_j\text{\textbardbl}_{2}^{2}}

$$
## 3. Demo
## References