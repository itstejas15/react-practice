import React from 'react';

const RetrieveData = () => {
  //localStorage remains same untill we explicitly clear browser cache, It can save upto 10-MiB
  const getData = localStorage.getItem('value') 
  //sessionStorage gets clear when we close the browser tab or even if we close browser, It can save upto 5-MiB
  const getValueFromSession = sessionStorage.getItem('value')
  //Cookie gets clear when we close the browser, but will not clear when we close the tab, capacity 4-KB
  const cookie = document.cookie

  // const handleClear = () => {
  //   localStorage.clear()
  //   const n2 = localStorage.getItem('value')
  //   window.alert(n2);
  // }

  //   const handleRemove = () => {
  //   localStorage.removeItem('value')
  //   const n2 = localStorage.getItem('value')
  //   window.alert(n2);
  // }

  return (
    <div>
      <p>Get data below which was stored in local storage</p>
      Fetching from localStorage = {getData}, <br/>
      Fetching from sessionStorage = {getValueFromSession}, <br/>
      Cookie = {cookie}
      {/* <button onClick={handleClear}>Clear Storage</button> */}
      {/* <button onClick={handleRemove}>Remove Item</button> */}
    </div>
  );
}

export default RetrieveData;