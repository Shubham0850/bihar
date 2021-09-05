import Image from "next/image";
import { Fade, Zoom, Flip, Slide } from "react-reveal";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="whatwedo">
      <Slide left>
        <div className="whatwedo__heading">
          <h1 className="h1">What We Do</h1>
          <h2 className="h2">Processes</h2>
        </div>
      </Slide>

      <Zoom left>
        <div className="whatewedo__img f1">
          <Image
            src="/images/f1.png"
            width={405}
            height={720}
            alt="whatwedo img"
          />
        </div>
      </Zoom>

      <Zoom top>
        <div className="whatewedo__img f2">
          <Image
            src="/images/f2.png"
            width={480}
            height={270}
            alt="whatwedo img"
          />
        </div>
      </Zoom>

      <Fade bottom>
        <div className="whatewedo__img f3">
          <Image
            src="/images/f3.png"
            width={375}
            height={666}
            alt="whatwedo img"
          />
        </div>
      </Fade>

      <Fade right>
        <div className="whatewedo__img f4">
          <Image
            src="/images/f4.png"
            width={518}
            height={291}
            alt="whatwedo img"
          />
        </div>
      </Fade>

      <Fade left cascade>
        <div className="whatewedo__img f5">
          <Image
            src="/images/f5.png"
            width={503}
            height={282}
            alt="whatwedo img"
          />
        </div>
      </Fade>

      <Flip left>
        <div className="whatwedo__list">
          <ul>
            <li>
              <p className="p">3D printing</p>
            </li>
            <li>
              <p className="p">Laser cutting</p>
            </li>
            <li>
              <p className="p">Wood working</p>
            </li>
            <li>
              <p className="p">Sewing</p>
            </li>
            <li>
              <p className="p">Fibrecasting</p>
            </li>
          </ul>
        </div>
      </Flip>
    </section>
  );
}
