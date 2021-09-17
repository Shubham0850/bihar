import Image from "next/image";
import Link from "next/link";
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
    <footer className="footer">
      <div className="footer__details">
        <div className="footer__details__contact">
          <h3 className="footer__h3">Artistry Inc</h3>
          <br />
          <p className="footer__p">
            506, IJMIMA Complex, Nr. Infinity 2 Mall, Off Link Road, Malad (W),
            Mumbai 400064, Maharashtra, India
          </p>
          <br />
          <a href="mailto:sales@artistryinc.in">
            <p className="footer__p">sales@artistryinc.in</p>
          </a>
          <br />
        
        </div>
        <div className="footer__details__gallery">
          <div className="footer__details__gallery-box">
            <span className="footer__details__gallery__img">
              <Image
                src="/images/footer/1.png"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/footer/2.png"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/footer/3.png"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/footer/4.png"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>
            <span className="footer__details__gallery__img">
              <Image
                src="/images/footer/5.png"
                alt="artistry gallery image"
                width={182}
                height={124}
                priority={true}
              />
            </span>

            <span className="footer__details__gallery__img">
              <Image
                src="/images/footer/6.png"
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
          <p className="footer__link">Copyright &#169; Artistry Inc. 2015</p>
        </div>
      </div>
    </footer>
  );
}
