import { Tab } from "@headlessui/react";
import Image from "next/image";

function Review(props) {
  return (
    <div className="testimonial__review" >
      <div className="testimonial__review__text">
        <div>
          <p className="p">{props.review}</p>
          <h4 className="name">{props.name}</h4>
          <p className="sign">{props.signature}</p>
        </div>
      </div>
      <div className="testimonial__review__img">
        <Image
          src="/images/testimonial.jpeg"
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
                />
              </Tab>
              <Tab
                className={({ selected }) =>
                  selected ? "tab-menu tab-selected" : "tab-menu"
                }
              >
                <Image
                  src="/images/company/comet.png"
                  width={235}
                  height={201}
                  alt="logo"
                />
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sem enim pellentesque consectetur pellentesque aenean. 
                    
                    Viverra tellus non semper quis faucibus duis.consectetur pellentesque aenean. Viverra tellus non semper quis faucibus duis."
                name="Carter Lipshutz"
                signature="shubham raj"
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sem enim pellentesque consectetur pellentesque aenean. 
                    
                    Viverra tellus non semper quis faucibus duis.consectetur pellentesque aenean. Viverra tellus non semper quis faucibus duis."
                name="Carter Lipshutz"
                signature="gulzari raj"
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sem enim pellentesque consectetur pellentesque aenean. 
                    
                    Viverra tellus non semper quis faucibus duis.consectetur pellentesque aenean. Viverra tellus non semper quis faucibus duis."
                name="Aryan Lipshutz"
                signature="aryan singh"
              />
            </Tab.Panel>
            <Tab.Panel>
              <Review
                review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu sem enim pellentesque consectetur pellentesque aenean. 
                    
                    Viverra tellus non semper quis faucibus duis.consectetur pellentesque aenean. Viverra tellus non semper quis faucibus duis."
                name="Aryan Lipshutz"
                signature="kishor singh"
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
