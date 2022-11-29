# Resume chain

## Introduction

This project is an implementation of data sharing application between Ethereum and Hyperledger Fabric. It can also be regarded as the blockchain interoperability between permissionless blockchain and permissioned blockchain. Please feel free to clone it for testing and development purposes. 

## Installation Guide

*Clone the repository*

```
git clone https://github.com/Myohannn/resume_chain.git
```

### Prerequisites for Hyperledger Fabric:

*Install docker:*

[Docker installation guide](https://docs.docker.com/engine/install/)

*Install Hyperledger Fabric 2.0 binaries:*
```
curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.0.0
```

*Install Go*

[Go installation guide](https://go.dev/dl/)

*Install npm and node.js:*

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install build-essential
```

*Install node dependencies from the package.json*

```
cd resume_chain/website
npm install
npm audit fix
```

### Prerequisites for Ethereum:

*Install truffle*
```
npm install truffle (If fails, try sudo install -g truffle)
```

*Install Ganache*

[Ganache installation guide](https://github.com/trufflesuite/ganache-ui/releases)   

*Set up Ganache*
 
 Create a new workplace and import resume_chain/eth/truffle/truffle-config.js
 
 ```
 cd resume_chain/eth/truffle

 truffle migrate
 ```
Copy the generated contract address and replace the contract address in resume_chain/website/employee.html and resume_chain/website/employer.html
```
var mycontract = new web3.eth.Contract(abi, <-replace your contract address here->);
```

### To run the code
```
cd resume_chain
./start_Network.sh
```

## Demostration

View employee page at: http://localhost:8000/employee

![employee page](employee_page.png)   

View employer page at: http://localhost:8000/employer

![employer page](employer_page.png)  






