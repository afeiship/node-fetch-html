# node-fetch-html
> Fetch html with node-fetch.

## installation
```shell
npm install -S @jswork/node-fetch-html
```

## usage
```js
import nfh from '@jswork/node-fetch-html';

nfh('http://www.baidu.com').then(($) => {
  console.log($('title').text());   // 百度
});
```
