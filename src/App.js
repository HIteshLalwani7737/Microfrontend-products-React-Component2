import React from 'react';

const addToCart = (item) => () => {
  // const event = new CustomEvent('addToCart', { detail: item });
  // window.dispatchEvent(event);
    const Http = new XMLHttpRequest();
    const url='http://192.168.43.153:8080';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        console.log(Http.responseText)
       document.getElementById("headercomponent").innerHTML = Http.responseText;
    }
}

const productItemView = (product, index) => {
  const price = parseFloat((Math.random() * 100).toFixed(2));

  return (
    <li key={index} style={{ padding: "30px", listStyle: "none", border: "1px solid #000", margin: "5px" }}>
      <b>{product}</b> <br />
      $ {price} <br />
      <button onClick={addToCart({ product, price })}>Buy</button>
    </li>
  );
};

export default () =>
  <section>
    <h2>Products</h2>
      <div id="headercomponent"></div>
    <ul style={{ display: 'flex', padding: '0' }}>
      { ['PG', 'PLOT', 'Property services', 'Rental'].map(productItemView) }
    </ul>
  </section>;
