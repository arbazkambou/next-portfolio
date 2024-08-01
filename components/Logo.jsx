import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" height={54} width={54} priority alt="" />
    </Link>
  );
}

export default Logo;
