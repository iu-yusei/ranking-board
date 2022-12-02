# ranking-board

サーバーレスの点数&ランキング開示 Web アプリです。

## 環境準備

### ①npm、vue-cli をインストール

- [Node.js(npm)](https://nodejs.org/ja/download/)をインストールしてください。
- [vue-cli](https://cli.vuejs.org/guide/installation.html)をインストールしてください

### ②npm コマンドでローカルサーバーを起動

```shell
npm install

npm run serve
```

### ③node.js を起動

```shell
cd server

node ./server.js
```

## 使い方

- 点数・ランキング開示用ページにアクセス
  http://localhost:8080/にアクセスした時の様子

- 点数入力用ページにアクセス
  http://localhost:8080/ws.html
  点数を開示する場合は `5001` を選択。
  ランキングを開示する場合は `5002` を選択。

**使い方のイメージ**
![demo](https://user-images.githubusercontent.com/78660150/205184037-6591fa36-7824-4db0-a8ce-eac983f7d1df.gif)

###　使用上の注意

- ブラウザを再読み込みすると、点数や、ランキングがリセットされます。
