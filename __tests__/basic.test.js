const nodeFetchHtml = require('../dist');

jest.setTimeout(50000);

describe('Basic test', () => {
  test('test development', (done) => {
    nodeFetchHtml('http://www.baidu.com').then(($) => {
      // const $ = cheerio.load(res);
      expect($('title').text().includes('百度')).toBe(true);
      done();
    });
  });
});
