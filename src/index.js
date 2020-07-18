import nxSpiderFetch from '@feizheng/next-spider-fetch';

export default (inUrl, inOptions) => {
  return nxSpiderFetch(inUrl, inOptions).then(res => res.text());
};
