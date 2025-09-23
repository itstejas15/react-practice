import React, { useEffect, useState } from 'react';

const Debounce = () => {
  const [data, setData] = useState();
  const [debounce, setDebounce] = useState();

  useEffect(() => {
    fetch('https://dummyjson.com/products').then((res) => res.json(res))
      .then((data) => {
        setData(data)
        console.log("data=", data)
      })
      .catch((err) => { console.log("err=", err) })
  }, [])

  const handleSearch = (e) => {
    // if (e.target.value.length > 3) {
    clearTimeout(debounce);
    const products = setTimeout(() => {
      fetch(`https://dummyjson.com/products/search?q=${e.target.value}`).then((res) => res.json(res))
        .then((data) => {
          setData(data)
          console.log("data=", data)
        })
        .catch((err) => { console.log("err=", err) })
    }, 1000)
    setDebounce(products);
    // }
  }
  return (
    <div>
      <h1>Factwise Assignment</h1>
      <div style={{ margin: "2rem" }}>
        <input placeholder='Search...' onChange={(e) => handleSearch(e)} />

        {data && data.products.map((ele) => {
          return (
            <div key={ele.id}>
              <h4>{ele.title}</h4>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default Debounce;