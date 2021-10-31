#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lroman79/drinks-vue.git master:gh-pages
lroman79/drinks-vue
cd -