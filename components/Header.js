import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import "@brainhubeu/react-carousel/lib/style.css";
import { autoplayPlugin } from "@brainhubeu/react-carousel";
import HoverVideoPlayer from "react-hover-video-player";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

function VideoPopUp() {
  return (
    <div className="video-popup">
      <HoverVideoPlayer
        videoSrc="/videos/header-bg.mp4"
        pausedOverlay={
          <Image
            src="/images/f2.png"
            width={480}
            height={270}
            alt="cover image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        }
        loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
        }
      />
    </div>
  );
}

export default function Header() {
  const [val, setValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [videoPopup, setVideoPopup] = useState(false);

  function onChange(value) {
    setValue(value);
  }

  function first() {
    setValue(0);
  }
  function second() {
    setValue(1);
  }
  function third() {
    setValue(2);
  }

  const videoSrc = "/videos/header-bg.mp4";

  function mouseMove(e) {
    const cursor = document.querySelector("#cursor");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  }

  function playVideo() {}

  return (
    <>
      <nav className="nav">
        <p
          className="p"
          onClick={() => {
            setVideoPopup(true);
          }}
        >
          Brand Video
        </p>

        <Image src="/logo.png" width={151} height={92} alt="artistry logo" />

        <Link href="#contact">
          <p className="p">Contact</p>
        </Link>
      </nav>
      <div className="header">
        <div
          className="header__play-area"
          onMouseMove={mouseMove}
          onClick={() => {
            setVideoPopup(true);
          }}
        >
          <div id="cursor">
            <Image src="/play.png" width={30} height={30} alt="play icon" />
          </div>
        </div>
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
        <Carousel
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
        />

        <div className="header__progress">
          <div className="header__progress-box">
            <div className="header__slider-btn" onClick={first}>
              <p className="p"></p>
            </div>

            <div className="header__slider-btn" onClick={second}>
              <p className="p"></p>
            </div>

            <div className="header__slider-btn" onClick={third}>
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
    </>
  );
}
