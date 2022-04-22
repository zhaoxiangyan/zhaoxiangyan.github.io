# GitHub Actions

## 一、GitHub Actions 是什么？

GitHub 做了一个[官方市场](https://github.com/marketplace?type=actions)，可以搜索到他人提交的 actions。另外，还有一个 [awesome actions](https://github.com/sdras/awesome-actions) 的仓库，也可以找到不少 action。

## 二、基本概念

GitHub Actions 有一些自己的术语。
（1）**workflow** （工作流程）：持续集成一次运行的过程，就是一个 workflow。
（2）**job** （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
（3）**step**（步骤）：每个 job 由多个 step 构成，一步步完成。
（4）**action** （动作）：每个 step 可以依次执行一个或多个命令（action）。
