import Image from "next/image";
import { Fade } from "react-reveal";

function Header() {
  return (
    <div className="cat__header">
      <div className="cat__header-box">
        <Fade bottom>
          <h1 className="h1 h1--dark">
            <span className="h1--light">बिहार में का बा ?</span>
          </h1>
          <h3 className="h2">#proudtobeabihari</h3>
        </Fade>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="cat__card" id="about">
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
        </div>
      </div>
    </div>
  );
}

export default function Category() {
  return (
    <div className="cat" id="what-we-do">
      <Header />
      <Card bgImgSrc="/images/chhath.jpg" heading="Our Festivals" />

      <Card
        bgImgSrc="/images/budh.jpeg"
        heading="The Birthplace Of Jainism And Buddhism"
      />

      <Card
        bgImgSrc="/images/nalanda.jpg"
        heading="Houses of The Oldest University"
      />

      <Card bgImgSrc="/images/ias.jpg" heading="The Land Of IAS Officers" />

      <Card bgImgSrc="/images/litti-choka.jpg" heading="Lip-smacking Cuisine" />
    </div>
  );
}
