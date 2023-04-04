#!/bin/bash
cd ./gui
rm -r dist
rm -r .parcel-cache

reset && npx parcel serve -p 1322 --no-cache --no-source-maps src/Portal.html

cd ..

