import Image from "next/image";
import { Fade } from "react-reveal";

function Header() {
  return (
    <Fade left>
      <div className="cat__header">
        <h1 className="h1 h1--dark">We Create Stories Through</h1>
        <h3 className="h2">Beautiful & Minimal Designs</h3>
      </div>
    </Fade>
  );
}

function Card(props) {
  return (
    <div className="cat__card">
      <div className="cat__card__img">
        <Image src={props.bgImgSrc} alt="feature" width={1515} height={1010} />
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
    <div className="cat">
      <Header />
      <Card
        bgImgSrc="/images/cat1.jpeg"
        heading="bridle"
        subHeading="Tailor Made"
      />

      <Card
        bgImgSrc="/images/cat2.jpeg"
        heading="IN STORE"
        subHeading="Tailor Made"
      />

      <Card
        bgImgSrc="/images/cat3.jpeg"
        heading="WINDOW"
        subHeading="Tailor Made"
      />
    </div>
  );
}
