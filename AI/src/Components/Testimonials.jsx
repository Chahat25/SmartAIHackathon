import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonials.css";

const Testimonials = () => {
  const options = {
    items: 1,
    margin: 20,
    lazyLoad: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  const testimonials = [
    {
      name: "Nishu Soni",
      role: "FrontEnd Developer",
      image:
        "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
    },
    {
      name: "Yashka",
      role: "AI Engineer",
      image:
        "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
    },
    {
      name: "Chahat Gupta",
      role: "AI Engineer",
      image:
        "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
    },
    {
      name: "Sneha",
      role: "Customer",
      image:
        "https://images.unsplash.com/photo-1521225099409-8e1efc95321d?ixlib=rb-1.2.1&auto=format&fit=crop&h=153&q=80",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit labore suscipit distinctio, officiis deserunt rem blanditiis ducimus.",
    },
    
  ];

  return (
    <section className="testimonials">
      <div className="container-test">
        <div className="title-test">
          <h5>Testimonials</h5>
          <h2>What Our Clients Say</h2>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {testimonials.map((testimonial, index) => (
            <div className="item-test" key={index}>
              <div className="profile-test">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="information">
                  <p className="name">{testimonial.name}</p>
                  <span className="role">{testimonial.role}</span>
                </div>
              </div>
              <p className="feedback">{testimonial.feedback}</p>
              <div className="quote-icon">
                <i className="fa fa-quote-right" aria-hidden="true"></i>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonials;
