#!/bin/sh

curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.0.0

curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install build-essential

git clone https://github.com/Myohannn/resume_chain.git

cd resume_chain/website

npm install

npm audit fix
