import { Tab } from "@headlessui/react";
import Image from "next/image";

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
        <Tab.Group>
          <Tab.List className="tab-list">
            <div className="testimonial__heading">
              <h1 className="h1 h1--dark">What They Say</h1>
              <h2 className="h2">Success Stories</h2>
            </div>
            <div className="tab-menu-box">
              <Tab
                className={({ selected }) =>
                  selected ? "tab-menu tab-selected" : "tab-menu"
                }
              >
                <Image
                  src="/images/company/tanishq.png"
                  width={320}
                  height={320}
                  alt="logo"
                  priority={true}
                />
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected ? "tab-menu tab-selected" : "tab-menu"
                }
              >
                <Image
                  src="/images/company/edge.jpeg"
                  width={196}
                  height={84}
                  alt="logo"
                  priority={true}
                />
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected ? "tab-menu tab-selected" : "tab-menu"
                }
              >
                <Image
                  src="/images/company/kngpn.jpeg"
                  width={167}
                  height={65}
                  alt="logo"
                  priority={true}
                />
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Review
                review="Abhijit and Team Artistry have been as passionate about their services and products as I am about my designs and jewellery. They complement us in many ways, and I’m happy to have used their services in the past couple of years to propel brand ANAND SHAH. My best wishes always to them."
                name="Carter Lipshutz"
                signature="shubham raj"
                imgSrc={"/images/t1.jpg"}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="We at Renn Studio are sticklers for detail....whether it is jewellery or the experience around it. Artistry helps to elevate this experience with its customized props and visual merchandising elements and we were proud to even showcase them as our service partners at our shows. Glad to have you with us Abhijit in our endeavors!"
                name="Carter Lipshutz"
                signature="gulzari raj"
                imgSrc={"/images/t2.jpg"}
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="Artistry deftly blends classy design aesthetics with functionality in jewellery display & visual merchandising. Their innate understanding &amp; knowledge of display design lends an element of understated elegance & luxury to help highlight the beauty of jewellery, without overpowering it."
                name="Aryan Lipshutz"
                signature="aryan singh"
                imgSrc={"/images/t3.jpg"}
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
