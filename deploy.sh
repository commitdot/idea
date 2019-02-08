set -e
yarn run build


cd docs


git init
git add -A
git commit -m 'deploy'




git push -f git@github.com:commitdot/idea.git master:gh-pages

cd -
