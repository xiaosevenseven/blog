#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist


# 提交dist目录的git更改，因为每次build都会重置dist目录，所以每次都需要重新git init
git init
git add -A
git commit -m 'deploy'

# 发布dist目录到github，需要强制推送

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:xiaosevenseven/blog.git master:gh-pages


cd -
