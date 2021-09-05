import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/brand-video">
        <p className="p"> Brand Video</p>
      </Link>

      <Image src="/logo.png" width={151} height={92} alt="artistry logo" />

      <Link href="/contact">
        <p className="p">Contact</p>
      </Link>
    </nav>
  );
}
