import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
  return (
    <nav className="side-nav" id="side-nav">
      <div className="side-nav__rotate">
        <div className="side-nav__links-box">
          <div className="side-nav__links">
            <Link href="#">
              <span className="side-nav__link ">
                <h3 className="h1 side-nav__h3">Who We Are</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
              </span>
            </Link>
            <Link href="#how-we-do">
              <span className="side-nav__link">
                <h3 className="h1 side-nav__h3">How We Do</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
              </span>
            </Link>

            <Link href="#">
              <span className="side-nav__link">
                <h3 className="h1 side-nav__h3">How We Design</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
              </span>
            </Link>

            <Link href="#">
              <span className="side-nav__link side-nav__active">
                <h3 className="h1 side-nav__h3">What They Say</h3>
                <h4 className="h2 side-nav__h4">Brand Video</h4>
              </span>
            </Link>
          </div>
        </div>
        <a href="#">
          <div className="side-nav__close">
            <Image src="/cross.svg" width={25} height={25} alt="cross icon" />
          </div>
        </a>
      </div>
    </nav>
  );
}
