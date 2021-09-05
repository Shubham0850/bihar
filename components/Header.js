import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import "@brainhubeu/react-carousel/lib/style.css";
import { autoplayPlugin } from '@brainhubeu/react-carousel';

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

export default function Header() {
  const [val, setValue] = useState(0);

  function onChange(value) {
    setValue(value);
  }

  function first(){
    setValue(0)
  }
  function second(){
    setValue(1)
  }
  function third(){
    setValue(2)
  }

  const videoSrc =
    "https://player.vimeo.com/external/375551302.hd.mp4?s=30f5eb12c4e47ba12d049481bff1f50d56a16ce5&profile_id=174";
  return (
    <div className="header">
      <Carousel
        value={val}
        onChange={onChange}
        slides={[
          <div key="1">
            <div className="header__text">
              <h1 className="h1">Jewelry display</h1>
              <h2 className="h2">Tailor Made</h2>
            </div>
          </div>,
          <div key="2">
            <div className="header__text">
              <h1 className="h1"> display</h1>
              <h2 className="h2">Tailor Made</h2>
            </div>
          </div>,
          <div key="3">
            <div className="header__text">
              <h1 className="h1">Jewelry</h1>
              <h2 className="h2">Tailor Made</h2>
            </div>
          </div>,
        ]}
        plugins={["clickToChange", 'infinite',
        {
          resolve: autoplayPlugin,
          options: {
            interval: 5000,
          }
        },]}
        animationSpeed={3000}
      />

      <div className="header__progress">
        <div className="header__progress-box">
          <div className="header__slider-btn" onClick={first}>
            <p className="p">
              01
              <br />
              Jwelery display
            </p>
          </div>

          <div className="header__slider-btn" onClick={second}>
            <p className="p">
              02
              <br />
              Jwelery display
            </p>
          </div>

          <div className="header__slider-btn" onClick={third}>
            <p className="p">
              03
              <br />
              Jwelery display
            </p>
          </div>
        </div>

        <Link href="#what-we-do">
          <p className="p scroll-text">Scroll down to see more</p>
        </Link>
      </div>
      <video className="header__bg-video" autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
