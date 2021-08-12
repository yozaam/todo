#!/bin/bash

cd frontend 
yarn install
yarn start & # `&` let's the script start in the background

cd ../backend
npm install
npm start