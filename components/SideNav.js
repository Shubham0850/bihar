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
            <Link href="#what-they-say">
              <span
                className={
                  router.asPath == "/#what-they-say"
                    ? "side-nav__link side-nav__active"
                    : "side-nav__link"
                }
              >
                <h3 className="h1 side-nav__h3">What They Say</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
              </span>
            </Link>

            <Link href="#what-we-do">
              <span
                className={
                  router.asPath == "/#what-we-do"
                    ? "side-nav__link side-nav__active"
                    : "side-nav__link"
                }
              >
                <h3 className="h1 side-nav__h3">What We Do</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
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
                <h4 className="h2 side-nav__h4">Brand Video</h4>
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
                <h3 className="h1 side-nav__h3">What They Say</h3>
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
          <Image src="/cross.svg" width={25} height={25} alt="cross icon" />
        </div>
      </div>
    </nav>
  );
}
