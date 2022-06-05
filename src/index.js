import nodeFetch from 'node-fetch';
import cheerio from 'cheerio';

module.exports = (inUrl, inOptions) => {
  return new Promise((resolve, reject) => {
    nodeFetch(inUrl, inOptions)
      .then((res) => res.text())
      .then((html) => {
        resolve(cheerio.load(html));
      })
      .catch(reject);
  });
};
