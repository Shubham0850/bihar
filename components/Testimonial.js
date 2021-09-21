import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fade} from "react-reveal";

function Review(props) {
  return (
    <div className="testimonial__review">
      <div className="testimonial__review__text">
        <div>
          <p className="p">{props.review}</p>
          <h4 className="name">{props.name}</h4>
          <p className="sign">{props.signature}</p>
        </div>
      </div>
      <div className="testimonial__review__img">
        <Image
          src={props.imgSrc}
          width={983}
          height={655}
          alt="testimonial"
          priority={true}
        />
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="testimonial" id="what-they-say">
      <div className="testimonial__box">
      <Fade big>
            <div className="testimonial__heading">
              <h1 className="h1 h1--dark">What They Say</h1>
              <h2 className="h2">Success Stories</h2>
            </div>
            </Fade>
        <Tab.Group>
         
          <Tab.Panels>
            <Tab.Panel>
              <Review
                review="Abhijit and Team Artistry have been as passionate about their services and products as I am about my designs and jewellery. They complement us in many ways, and I’m happy to have used their services in the past couple of years to propel brand ANAND SHAH. My best wishes always to them."
                name="Anand Shah"
                signature="Anand Shah"
                imgSrc={"/images/t1.jpg"}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="We at Renn Studio are sticklers for detail....whether it is jewellery or the experience around it. Artistry helps to elevate this experience with its customized props and visual merchandising elements and we were proud to even showcase them as our service partners at our shows. Glad to have you with us Abhijit in our endeavors!"
                name="Rahul Jhaveri"
                signature="Rahul Jhaveri"
                imgSrc={"/images/t2.jpg"}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="Artistry deftly blends classy design aesthetics with functionality in jewellery display & visual merchandising. Their innate understanding &amp; knowledge of display design lends an element of understated elegance & luxury to help highlight the beauty of jewellery, without overpowering it."
                name="Mr. Ishu Datwani"
                signature="Mr. Ishu Datwani"
                imgSrc={"/images/t3.jpg"}
              />
            </Tab.Panel>
          </Tab.Panels>

          <Tab.List className="tab-list">
          
          <div className="tab-menu-box">
            <Tab
              className={({ selected }) =>
                selected ? "tab-menu tab-selected" : "tab-menu"
              }
            >
              <span></span>
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? "tab-menu tab-selected" : "tab-menu"
              }
            >
              <span></span>
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? "tab-menu tab-selected" : "tab-menu"
              }
            >
              <span></span>
            </Tab>
          </div>
        </Tab.List>
        </Tab.Group>
      </div>
    </section>
  );
}
