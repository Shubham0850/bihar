import Image from "next/image";
import { Fade } from "react-reveal";

function Header() {
  return (
    <div className="cat__header">
      <div className="cat__header-box">
        <Fade bottom>
          <h1 className="h1 h1--dark">
            <span className="h1--light">We Create</span>
            <br />
            Visual Stories <span className="h1--light">For Our</span>
            <br />
            Customers <span className="h1--light">Through</span>
          </h1>
          <h3 className="h2">Beautiful & Minimal Designs</h3>
        </Fade>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="cat__card">
      <div className="cat__card__img">
        <Image
          src={props.bgImgSrc}
          alt="feature"
          width={1515}
          height={1010}
          priority={true}
        />
      </div>
      <div className="cat__card__text">
        <div>
          <h1 className="h1">{props.heading}</h1>
          <h2 className="h2">{props.subHeading}</h2>
        </div>
      </div>
    </div>
  );
}

export default function Category() {
  return (
    <div className="cat" id="what-we-do">
      <Header />
    </div>
  );
}