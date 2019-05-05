#!/bin/env bash
yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "move doc"
git push
git checkout -