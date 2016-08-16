#!/bin/bash

if [ "$NODE_ENV" = "ci" ]
then echo "starting service"
  SITEROOT=/cfn GA_TAG_ID=UA-xxxxxxxx-1
fi

cp -r /app/public/* /public/

su nodejs -c 'exec node app.js'

