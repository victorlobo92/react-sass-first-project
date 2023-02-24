#!/bin/bash

echo "Checking application is already created..."

if [ -z "${UID}" ] || [ -z "${GID}" ]; then
  echo "Please run 'source ./setup-env.sh' before continuing here."
else
  if test ! -f "/app/package.json"; then
    echo "Creating a new react app..."

    npm create vite@latest . -- --template react

    chown -R "${UID}":"${GID}" ./
  else
    echo "Application already exists!"
  fi

  echo "Installing react dependencies..." &
  npm install

  echo "Installing sass package..." &
  npm install -D sass

  echo "Starting application..." &
  npm run dev -- --host --port 3000
fi
