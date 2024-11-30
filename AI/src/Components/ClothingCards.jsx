import React from 'react';
import './ClothingCards.css';

const ClothingCards = () => {
  const cards = [
    {
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg",
      title: "Harpa",
      description: "Womans printed clothing",
      price: "Rs.839",
      originalPrice: "Rs.2099",
      discount: "(60% OFF)"
    },
    {
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6625378/2018/6/5/fcec8d8e-4253-4fa4-ae6e-c6805b3b8fd31528183265021-na-2331528183264786-1.jpg",
      title: "Harpa",
      description: "Womans printed clothing",
      price: "Rs.839",
      originalPrice: "Rs.2099",
      discount: "(60% OFF)"
    },
    {
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg",
      title: "Harpa",
      description: "Womans printed clothing",
      price: "Rs.839",
      originalPrice: "Rs.2099",
      discount: "(60% OFF)"
    },
    {
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578940/2018/10/23/fe701151-69e6-4e20-9e2a-ace63081a8e11540282217137-Harpa-Women-Dresses-191540282216937-5.jpg",
      title: "Harpa",
      description: "Womans printed clothing",
      price: "Rs.839",
      originalPrice: "Rs.2099",
      discount: "(60% OFF)"
    },
    {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg",
        title: "Harpa",
        description: "Womans printed clothing",
        price: "Rs.839",
        originalPrice: "Rs.2099",
        discount: "(60% OFF)"
      },
      {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6625378/2018/6/5/fcec8d8e-4253-4fa4-ae6e-c6805b3b8fd31528183265021-na-2331528183264786-1.jpg",
        title: "Harpa",
        description: "Womans printed clothing",
        price: "Rs.839",
        originalPrice: "Rs.2099",
        discount: "(60% OFF)"
      },
      {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg",
        title: "Harpa",
        description: "Womans printed clothing",
        price: "Rs.839",
        originalPrice: "Rs.2099",
        discount: "(60% OFF)"
      },
      {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578940/2018/10/23/fe701151-69e6-4e20-9e2a-ace63081a8e11540282217137-Harpa-Women-Dresses-191540282216937-5.jpg",
        title: "Harpa",
        description: "Womans printed clothing",
        price: "Rs.839",
        originalPrice: "Rs.2099",
        discount: "(60% OFF)"
      }
  ];

  return (
    <div className="clothing-container">

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="clothing-card">
              <div className="clothing-card-head">
                <img className="clothing-card-img-top" src={card.image} alt="" />
                <div className="clothing-surprise-bubble">
                  <span className="clothing-heart-icon">
                    <i className="fas fa-heart"></i>
                  </span>
                  <a href="#"><span>More</span></a>
                </div>
              </div>
              <div className="clothing-card-body">
                <h4 className="clothing-card-title">{card.title}</h4>
                <p className="clothing-card-description">{card.description}</p>
                <p className="clothing-card-price-details">
                  <span className="clothing-card-price">{card.price}&ensp;</span>
                  <span className="clothing-card-crossed">{card.originalPrice}</span>
                  <span className="clothing-card-discount">&ensp;{card.discount}</span>
                </p>
                <div className="row">
                  <div className="col-md-6 clothing-card-button">
                    <a href="">
                      <div className="clothing-card-button-inner bag-button">Add to Bag</div>
                    </a>
                  </div>
                  <div className="col-md-6 clothing-card-button">
                    <a href="">
                      <div className="clothing-card-button-inner wish-button">Wishlist</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClothingCards;
