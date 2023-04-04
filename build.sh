#!/bin/bash

cd ./gui
rm -r dist
rm -r .parcel-cache

reset && npx parcel build --no-cache --no-source-maps src/Portal.html
# reset && npx parcel build --no-cache src/Portal.html

cd ..

rm -R ./build/dist
# rm -R ./build/
mkdir -p ./build/dist

cp -R ./gui/dist/* ./build/dist/

rm -R ./gui/.parcel-cache
rm -R ./gui/dist

sed -i 's+/Portal+./Portal+g' ./build/dist/Portal.html 
