#!/bin/bash

echo "Checking application is already created..."

if [ -z "${UID}" ] || [ -z "${GID}" ]; then
  echo "Please run 'source ./setup-env.sh' before continuing here."
else
  if test ! -f "/app/package.json"; then
    echo "Creating a new react app..."

    npx create-react-app .

    chown -R "${UID}":"${GID}" ./
  else
    echo "Application already exists!"
  fi

  echo "Starting application..."
  npm start
fi
