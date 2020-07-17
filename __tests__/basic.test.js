const nodeFetchHtml = require('../dist').default;
const cheerio = require('cheerio');

describe('Basic test', () => {
  test('test development', (done) => {
    nodeFetchHtml('http://www.baidu.com').then(res => {
      const $ = cheerio.load(res);
      expect(
        $('title').text().includes('百度')
      ).toBe(true)
      done();
    })
  });
});
