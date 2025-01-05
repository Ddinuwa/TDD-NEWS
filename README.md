l
<h1 align="center">TDD NEWS BOT</h1>

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">

<p align="center">
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=33&pause=1000&color=5513F7&width=435&lines=TDD+NEWS+WHATSAPP+BOT" alt="Typing SVG" /></a>
</p>
<p align="center">
<a href="https://github.com/TDD-GANGS/">
    <img src="https://i.ibb.co/zGWnNZK/IMG-20241224-WA0179.jpg"  width="700px">
</a>
<hr>




## 💡 FOLLOW OUR CHANAL

<a href="https://whatsapp.com/channel/0029VahMZasD8SE5GRwzqn3Z"><img src="https://img.shields.io/badge/Join%20Our%20WhatsApp%20Channel-blue" alt="📎 Join Our WhatsApp Channel" width="350"></a>

<br>

<div align="center">

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">
 
  <h1>👇 DEPLOY NOW 👇</h1>
</div>


## FORK THE REPO

<a href="https://github.com/TDD-GANGS/TDD-NEWS/fork"><img src="https://img.shields.io/badge/Fork%20Repo-blue" alt="FORK VAJIRA MD REPO" width="150"></a>

## GET SESSION ID

<a href="https://vajirasessionid-78fa4ff8a63a.herokuapp.com/"><img src="https://img.shields.io/badge/QR%20OR%20PAIR%20CODE-blue" alt="GET SESSION" width="200"></a>

## DEPLOY NOW

<a href="https://vajiratech.github.io/VAJIRA-DEPLOY/QUEEN-IZUMI-WEB-main/projects/deployment.html"><img src="https://img.shields.io/badge/DEPLOYMENT%20METHODS-green" alt="DEPLOY PLATFORMS" width="300"></a>
<br>

<img src="https://i.imgur.com/dBaSKWF.gif" height="90" width="100%">










































## Workflow Deploy Code 👇


```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```

