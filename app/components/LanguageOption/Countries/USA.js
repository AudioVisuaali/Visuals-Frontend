import React from 'react';

const USA = () => {
  const useTag = `
  <path d="m0,0h1235v650H0"/>
  <path stroke="#B22234" stroke-width="2470" stroke-dasharray="50" d="m0,0v651"/>
  <path fill="#3C3B6E" d="m0,0h494v350H0"/>
  <g id="q"><g id="d"><g id="e"><g id="f"><g id="t">
  <path d="m30.1,50.6 12-36 12,36-30.8-22h37.8" id="s"/>
  <use xlink:href="#s" x="82"/></g>
  <use xlink:href="#t" x="164"/>
  <use xlink:href="#s" x="328"/></g>
  <use xlink:href="#s" x="410"/></g>
  <use xlink:href="#f" x="41" y="35"/></g>
  <use xlink:href="#d" y="70"/></g>
  <use xlink:href="#q" y="140"/>
  <use xlink:href="#e" y="280"/>
`;
  return (
    <svg
      viewBox="0 0 1030 650"
      fill="#fff"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: useTag }}
    />
  );
};

export default USA;
