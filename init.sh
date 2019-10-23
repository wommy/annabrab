#!/bin/bash
# ask user for new project name

echo whats the project name
read -p 'name: ' name

mkdir $name-technomad_11ty && cd $name-technomad_11ty
git clone https://github.com/wommy/technomad_11ty.git .
rm -rf .git && git init
