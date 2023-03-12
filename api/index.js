// index.js
`use strict`

const express = require('express');
const app = express();

app.get('/*', (req, res) => {
    res.send('hello, world!');
    res.end();
})

const port = process.env.PORT || 3000;
// ポート番号は上記のように環境変数から読み込むこと
app.listen(3000, () => console.log(`listening on port ${port}`));