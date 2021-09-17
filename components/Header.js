import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import SideNav from "../components/SideNav";

function VideoPopUp() {
  return (
    <div className="video-popup">
      <video width="100%" controls autoPlay>
        <source src="/videos/header-bg.mp4" type="video/mp4" />
        <p>Your browser does not support HTML video.</p>
      </video>
    </div>
  );
}


export default function Header() {
  const [videoPopup, setVideoPopup] = useState(false);
  const [isSidebarOpen, setSidebar] = useState(false);

  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      scrollIndicator();
    };

    function scrollIndicator() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const screenHeiight = screen.height;
      document.getElementById("scrollBar").style.height = scrolled + "%";
    }
  }, []);

 

  return (
    <div>
      {isSidebarOpen && (
        <SideNav toggle={isSidebarOpen} setToggle={setSidebar} />
      )}
      <a href="#side-nav" id="scrollBar"></a>
      <nav className="nav">
        <span
          onClick={() => {
            setSidebar(true);
          }}
        >
          <p className="p">Menu</p>
        </span>

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
        <Tab.Group>
          <div className="header__slider">
            <div className="header__progress">
              <Tab.List className="header__progress-box">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "header__slider-btn header__active-slider"
                      : "header__slider-btn"
                  }
                ></Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "header__slider-btn header__active-slider"
                      : "header__slider-btn"
                  }
                >
                  <p className="p"></p>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "header__slider-btn header__active-slider"
                      : "header__slider-btn"
                  }
                >
                  <p className="p"></p>
                </Tab>
              </Tab.List>
              <Link href="#how-we-do">
                <p className="p scroll-text">Scroll down to see more</p>
              </Link>
            </div>
            <Tab.Panels className="header__tab">
              <Tab.Panel className="header__text-animation">
                <h1 className="h1">
                  <span>JEWELRY</span> <span>DISPLAY</span>
                </h1>
                <h2 className="h2">Tailor Made</h2>
              </Tab.Panel>
              <Tab.Panel className="header__text-animation">
                <h1 className="h1">
                  <span>JEWELRY</span> <span>DISPLAY2</span>
                </h1>
                <h2 className="h2">Tailor Made</h2>
              </Tab.Panel>
              <Tab.Panel className="header__text-animation">
                <h1 className="h1">
                  <span>JEWELRY</span> <span>DISPLAY3</span>
                </h1>
                <h2 className="h2">Tailor Made</h2>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>

      <video className="header__bg-video" autoPlay loop muted playsInline>
        <source src={"/videos/banner-video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}
