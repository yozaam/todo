#!/bin/bash

cd frontend 
yarn install
yarn start & # `&` let's the script start in the background

cd ../backend
npm install
npm start

# If you get 'Permission denied then make this an executable: `chmod +x script-name-here.sh`