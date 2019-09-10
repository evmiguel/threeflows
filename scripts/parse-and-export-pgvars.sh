#!/bin/bash
# Adapted from https://stackoverflow.com/questions/6174220/parse-url-in-shell-script

# extract the protocol
proto="$(echo $1 | grep :// | sed -e's,^\(.*://\).*,\1,g')"
# remove the protocol
url="$(echo ${1/$proto/})"
# extract the user (if any)
user_password="$(echo $url | grep @ | cut -d@ -f1)"
user="$(echo $user_password | grep : | cut -d: -f1)"
# extract the password
password="$(echo $user_password | grep : | cut -d: -f2)"
# extract the host and port
hostport="$(echo ${url} | cut -d@ -f2)"
# by request host without port    
host="$(echo $hostport | sed -e 's,:.*,,g')"
# by request - try to extract the port
port="$(echo $hostport | sed -e 's,^.*:,:,g' -e 's,.*:\([0-9]*\).*,\1,g' -e 's,[^0-9],,g')"
# extract the path (if any)
path="$(echo $url | grep / | cut -d/ -f2-)"

export PGUSER=$user
export PGPASSWORD=$password
export PGHOST=$host
export PGPORT=$port
export PGDATABASE=$path
echo "PG variables exported"