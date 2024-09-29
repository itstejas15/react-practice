import React from 'react';
import { Link } from 'react-router-dom';

const JsMethods = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <h1>JS Methods</h1>
      <div>
        <Link to={'https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0'}>
          Reference
        </Link>
      </div>
      <li>map()</li>
      <li>filter()</li>
      <li>sort()</li>
      <li>forEach()</li>
      <li>concat()</li>
      <li>every()</li>
      <li>some()</li>
      <li>includes()</li>
      <li>join()</li>
      <li>reduce()</li>
      <li>find()</li>
      <li>findIndex()</li>
      <li>length()</li>
      <li>indexOf()</li>
      <li>fill()</li>
      <Link to={'/jsMethods/sliceAndSplice'}> <li>slice()</li> </Link>
      <Link to={'/jsMethods/sliceAndSplice'}> <li>splice()</li> </Link>
      <li>call()</li>
      <li>apply()</li>
      <li>bind()</li>
      <li>reverse()</li>
      <li>push()</li>
      <li>pop()</li>
      <li>shift()</li>
      <li>unshift()</li>
      <li>indexOf()</li>
      <li>replace()</li>

      {/* <li>flatMap()</li>
      <li>promise()</li>
      <li>promiseAll()</li>
      <li>document.getElementById(id)</li>
      <li>document.getElementsByTagName(name)</li>
      <li>document.getElementsByClassName(name)</li>
      <li>preventDefault()</li>
      <li>stopPropagation()</li>
      <li>replace()</li>
      <li>replace()</li>
      <li>replace()</li>
      <li>replace()</li>
      <li>replace()</li>
      <li>replace()</li>
      <li>replace()</li> */}

    </div>
  );
}

export default JsMethods;