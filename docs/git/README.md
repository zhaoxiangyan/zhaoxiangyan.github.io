# Git

## git 名词

- **-d** --delete 删除
- **-D** --delete --force
- **-f** --force 强制
- **-m** --move 移动或重命名
- **-M** --move --force
- **-r** --remote 远程
- **-a** --all 所有
- **-i** --interactive 交互式
- **--amend** 修正
- **-u** --upstream 上游分支

## git commit 提交规范

```bash
git commit -m "hello world"
```

commit 的类型：

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本
- workflow: 工作流相关文件修改
- upload: 代码上传相关

## [git branch 分支](https://oschina.gitee.io/learn-git-branching/)

### 查看分支

**git branch [-r|-a]**

- git branch 查看本地所有分支
- git branch -r 查看远程所有分支
- git branch -a 查看本地和远程所有分支

### 删除分支

**git branch (-d|-D) branchname**

- git branch -d branchname 删除本地分支
- git branch -d -r branchname 删除远程分支，删除后，需要 push 服务器：git push origin :branchname

### 重命名分支

**git branch (-m|-M) oldbranch newbranch**

如果需要重命名远程分支，推荐：

1. 删除远程待修改分支
2. push 本地新分支名到远程

### 移动分支到目标位置

**git branch -f [branch_name] [object_pos]**

```bash
git branch -f bugFix master~3
git branch -f master c6  (c6是提交记录哈希值)
```

### 合并分支

- git merge 更清晰的合并逻辑
- git rebase 更线性的提交历史

### 撤销变更

- git reset 分支记录回退
- git revert 新的提交记录(适合推送到远程仓库)

## 整理提交记录

### 1.git cherry-pick <提交号>...

将一些提交复制到当前所在位置(HEAD)下面

### 2.git rebase -i

- 调整提交记录的顺序
- 删除不想要的提交
- 合并提交

## 远程仓库

### 远程仓库有修改，需要提交

```bash
git fetch
git rebase origin/master 或 git merge origin/master
git push
```

简写
`git pull --rebase`或`git pull`

### 合并特性分支

git rebase 和 git merge 优缺点：

- 优点
  - rebase 使你的提交树变得更干净，所有的提交都在一条线上
- 缺点
  - rebase 修改了提交树的历史(提交记录顺序)

### 设置远程追踪分支

1. `git checkout -b newBranch origin/master`

   创建一个`newBranch`的分支，它跟踪远程分支`origin/master`

2. `git branch -u origin/master newBranch`

   这样`newBranch`就会跟踪`origin/master`了，如果当前在`newBranch`分支上，还可以省略`newBranch`:`git branch -u origin/master`

### git push 参数

`git push origin <source>:<destination>`

- `git push origin :master` push 传空值 source，会删除远程仓库的 master 分支

### git fetch 参数

`git fetch origin <source>:<destination>`

- git fetch 没有参数，会下载所有的提交记录到各个远程分支
- `git fetch origin :master` fetch 传空值 source，会在本地创建一个新分支

### git pull 参数

`git pull origin <source>:<destination>`

- git pull 就是 git fetch 加上 git merge
