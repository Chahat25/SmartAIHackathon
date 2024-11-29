import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './VerticalImageLoop.css';

const VerticalImageLoop = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;
    const cols = gsap.utils.toArray('.col');

    cols.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? '+=' : '-='; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: 'none',
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction === '+=') {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }
              return y;
            }),
          },
        });
      });
    });

    const imagesScrollerTrigger = ScrollTrigger.create({
      trigger: 'section',
      start: 'top 50%',
      end: 'bottom 50%',
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });

    return () => {
      // Correct way to remove ScrollTrigger instance
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="relative h-screen"> {/* Set section to 100vh */}
        <h1 className="absolute top-0 left-0 right-0 bottom-0 grid place-items-center text-white font-extrabold text-3xl sm:text-4xl md:text-6xl max-w-3xl mx-auto mix-blend-difference pointer-events-none">
          TRYLY
        </h1>

      </section>

      <div className="gallery flex flex-row justify-center w-full h-screen fixed top-0 left-1/2 transform -translate-x-1/2"> {/* Ensure the gallery fits in the viewport */}
        {/* Adjust columns inside gallery to fit within the screen */}
        {[...Array(3)].map((_, colIndex) => (
          <div key={colIndex} className="col flex flex-col justify-start h-full overflow-hidden mx-2vw">
            {[...Array(3)].map((_, imgIndex) => (
              <div key={imgIndex} className="image flex justify-center items-center opacity-60 h-screen w-full">
                <img
                  src={`https://images.pexels.com/photos/${10324713 + imgIndex}/pexels-photo-${10324713 + imgIndex}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w`}
                  alt={`Image ${imgIndex + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalImageLoop;
