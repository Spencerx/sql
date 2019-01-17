#!/usr/bin/env sh

# abort on errors
set -e

# build + make sure dependencies is installed
yarn
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Website AutoDeploy'

git push -f git@github.com:Kuma-Cheatsheet/sql.git master:gh-pages

cd -