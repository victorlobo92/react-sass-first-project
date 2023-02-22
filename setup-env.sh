#!/bin/bash

echo -e "Setting up the .env file...\n"

echo "UID=$UID" > .env
echo "GID=$GROUPS" >> .env

echo -e "Your .env file is ready!\n"