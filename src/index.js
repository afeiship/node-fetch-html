import nodeFetch from 'node-fetch';

export default (inUrl, inOptions) => {
  return nodeFetch(inUrl, inOptions).then(res => res.text());
};
