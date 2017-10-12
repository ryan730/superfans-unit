#!/bin/bash

set +x

#export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
#export PATH=$PATH:sonar-scanner/bin

#echo $pwd
#sonar-scanner

rm -rf src
rm -rf images
cp -r ../../src src
#cp -r ../../images images
sonar/sonar-scanner/bin/sonar-scanner&& rm -rf src

#&& rm -rf ./images

