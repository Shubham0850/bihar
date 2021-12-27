import Image from "next/image";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="footer" id="footer">
      <div className="footer__details">
        <div className="footer__details__contact">
          <h3 className="footer__h3">BIHAR</h3>
          <br />
          <p className="footer__p">
            {`जन्म मिला जिस मिट्टी पर उस मिट्टी का आभारी हूँ।
स्वर्ग से सुंदर है बिहार मेरा
और मैं गर्वित बिहारी हूँ।।`}
          </p>
          <br />
          <a href="mailto:rajshubham0850@gmail.com">
            <p className="footer__p">rajshubham0850@gmail.com</p>
          </a>
          <br />
        </div>
        <div className="footer__details__gallery">
          <div className="footer__details__gallery-box">
            <span className="footer__details__gallery__img">
              <Image
                src="/images/ias.jpg"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/madhubani.jpg"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/chhath.jpg"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/budh.jpeg"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>
            <span className="footer__details__gallery__img">
              <Image
                src="/images/nalanda.jpg"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/litti.jpg"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>
          </div>
        </div>
        <div
          className="footer__back-to-top footer__rotate link"
          onClick={scrollTop}
        >
          <span className="footer__rotate--rev">
            <Image
              src="/up.png"
              alt="top icon"
              width={40}
              height={40}
              priority={true}
            />
          </span>
          <span>
            <p className="footer__p "> Back to Top</p>
          </span>
        </div>
      </div>

      <div className="footer__links">
        <div className="footer__links__copy-right">
          <p className="footer__link">
            Copyright &#169;{" "}
            <a href="http://shubhamraj.live/" target="_blank" rel="noreferrer">
              Shubham Raj
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
