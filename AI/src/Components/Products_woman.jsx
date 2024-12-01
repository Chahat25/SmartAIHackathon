// React Component: Products.js

import './Products.css'; // Import the CSS file
import Arrow from '../assets/Arrow.png';
import { useState } from 'react';

const Products = () => {
  const [liked, setLiked] = useState({});

  const companies = [
    {
      name: 'H&M',
      description: 'Long-sleeved Jersey Top',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMzgDPSZQ5gWmyuVYDigH3SLdKN3fm4PCkFfN_Dv-f6P8GWtG8HoDddC5SmZaVnrHn-cirj8S0_Ixz7wpwE4pZjEsWzy2MRsePufHDEsx2&usqp=CAE',
      price: 699,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'ZARA',
      description: 'Crocodile-patterned mini dress',
      imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2Ffe%2F32fe2573f027ea976166e9f4af98c719581af145.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 1499,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'Only',
      description: 'Cream Printed Oversized T-shirt',
      imgSrc: 'https://images.bestsellerclothing.in/data/only/02-mar-2024/144290401_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto',
      price: 5849,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
    },
    {
      name: 'Only',
      description: 'Brown Front Button Cardigan',
      imgSrc: 'https://images.bestsellerclothing.in/data/only/29-sep-2023/283532701_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto',
      price: 1259,
      discount: 59,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'Roadster',
      description: 'Roadster Women Black White Striped Round Neck',
      imgSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVkgG5atO8xaqo_xscaoQF3reEtEMdG-X_lfGY4vacvl_ENv70IinFxqgVJ1d-iBSGZt_C6_QrfkimCuLJB3gXOLC8xSxDChsYh_Mhqcw&usqp=CAE',
      price: 286,
      discount: 46,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'Max',
      description: 'Women Striped Polo T-shirt',
      imgSrc: 'https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013971370-Brown-BROWN-1000013971370_01-2100.jpg',
      price: 599,
      discount: 20,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
    },
  ];

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="trusted-companies">
      <div className="container">
        {companies.map((company, index) => (
          <div className="card" key={index}>
            <div className="card-inner" style={{ '--clr': '#fff' }}>
              <div className="box">
                <div className="imgBox">
                  <img src={company.imgSrc} alt={company.name} />
                </div>
                <div className="icon">
                  <a href="#" className="iconBox" style={{ background: company.iconBg }}>
                    <img src={Arrow} className="arrimg" alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>{company.name}</h3>
              <p>{company.description}</p>

              <div className="price-details">
                <span className="price">${(company.price - (company.price * company.discount) / 100).toFixed(2)}</span>
                <span className="discount">{company.discount}% OFF</span>
              </div>
              <div className="actions">
                <button className="add-to-cart">Add to Cart</button>
                <button
                  className={`like-button ${liked[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                >
                  {liked[index] ? '❤️' : '♡'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
