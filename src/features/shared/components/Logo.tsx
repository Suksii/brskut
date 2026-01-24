import { Link } from "@/src/i18n/navigation";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href={"/"} className="shrink-0">
        <Image src={"/globe.svg"} alt="Brskut logo" width={60} height={140}/>
    </Link>
  )
}
