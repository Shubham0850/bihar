import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import "@brainhubeu/react-carousel/lib/style.css";
import { autoplayPlugin } from "@brainhubeu/react-carousel";
import HoverVideoPlayer from "react-hover-video-player";
import SideNav from "./SideNav";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

function VideoPopUp() {
  return (
    <div className="video-popup">
      <video width="100%" controls>
        <source src="/videos/header-bg.mp4" type="video/mp4" />
        <p>Your browser does not support HTML video.</p>
      </video>
    </div>
  );
}

export default function Header() {
  const [videoPopup, setVideoPopup] = useState(false);
  const [menu, setMenu] = useState(false);

  const videoSrc = "/videos/header-bg.mp4";

  return (
    <div>
      <nav className="nav">
        <a href="#side-nav">
        <p className="p">Menu</p>
        </a>

        <div className="logo">
          <Image src="/logo.png" width={151} height={92} alt="artistry logo" />
        </div>

        <Link href="#contact">
          <p className="p">{"Let's Talk"}</p>
        </Link>
      </nav>

      <div
        className="cursor-box"
        onClick={() => {
          setVideoPopup(true);
        }}
      ></div>

      {videoPopup && (
        <div className="popup">
          <VideoPopUp />
          <div
            className="popup__close"
            onClick={() => {
              setVideoPopup(false);
            }}
          ></div>
        </div>
      )}

      <div className="header">
        <div className="header__progress">
          <div className="header__progress-box">
            <div className="header__slider-btn">
              <p className="p"></p>
            </div>

            <div className="header__slider-btn">
              <p className="p"></p>
            </div>

            <div className="header__slider-btn">
              <p className="p"></p>
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
    </div>
  );
}

{
  /* <Carousel
value={val}
onChange={onChange}
slides={[
  <div key="1">
    <div className="header__text">
      <h1 className="h1">Jewelry</h1>
      <h2 className="h2">Tailor Made</h2>
    </div>
  </div>,
  <div key="2">
    <div className="header__text">
      <h1 className="h1"> Bridel</h1>
      <h2 className="h2">Tailor Made</h2>
    </div>
  </div>,
  <div key="3">
    <div className="header__text">
      <h1 className="h1">In store</h1>
      <h2 className="h2">Tailor Made</h2>
    </div>
  </div>,
]}
plugins={[
  "clickToChange",
  "infinite",
  {
    resolve: autoplayPlugin,
    options: {
      interval: 5000,
    },
  },
]}
animationSpeed={3000}
/> */
}
