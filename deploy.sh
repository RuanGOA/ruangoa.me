#/bin/bash

git pull origin main

cd ../

rm -rf ruangoa.github.io/

git clone https://github.com/ruangoa/ruangoa.github.io

cd ruangoa.github.io/

rm -rf ./*

git clone https://github.com/ruangoa/portfolio

mv portfolio/* .

rm -rf portfolio

yarn install

yarn deploy

cd ../

rm -rf ruangoa.github.io
