import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideNav({ setToggle }) {
  const router = useRouter();
  return (
    <nav className="side-nav" id="side-nav">
      <div className="side-nav__rotate">
        <div className="side-nav__links-box">
          <div className="side-nav__links">
            <Link href="#connect">
              <span
                className={
                  router.asPath == "/#connect"
                    ? "side-nav__link side-nav__active"
                    : "side-nav__link"
                }
              >
                <h3 className="h1 side-nav__h3">Lets talk</h3>
                <h4 className="h2 side-nav__h4">Contact</h4>
              </span>
            </Link>

            <Link href="#what-they-say">
              <span
                className={
                  router.asPath == "/#what-they-say"
                    ? "side-nav__link side-nav__active"
                    : "side-nav__link"
                }
              >
                <h3 className="h1 side-nav__h3">What they say</h3>
                <h4 className="h2 side-nav__h4">Success story</h4>
              </span>
            </Link>

            <Link href="#how-we-do">
              <span
                className={
                  router.asPath == "/#how-we-do"
                    ? "side-nav__link side-nav__active"
                    : "side-nav__link"
                }
              >
                <h3 className="h1 side-nav__h3">How We Do</h3>
                <h4 className="h2 side-nav__h4">Process</h4>
              </span>
            </Link>

            <Link href="#">
              <span
                className={
                  router.asPath == "/#"
                    ? "side-nav__link side-nav__active"
                    : "side-nav__link"
                }
              >
                <h3 className="h1 side-nav__h3">What we are</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
              </span>
            </Link>
          </div>
        </div>
        <div
          className="side-nav__close link"
          onClick={() => {
            setToggle(false);
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z" fill="white"/>
</svg>

        </div>
      </div>
    </nav>
  );
}
