import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://github.com/arbazkambou",
    name: <RiGithubFill />,
  },
  {
    path: "https://web.facebook.com/arbazkambou",
    name: <RiFacebookFill />,
  },
  {
    path: " https://x.com/Arbaz_kambou?t=tOLuTU1lSsaE1LegQa2z-A&s=08 ",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.instagram.com/arbazkambou/",
    name: <RiInstagramFill />,
  },
  // {
  //   path: "/",
  //   name: <RiLinkedinFill />,
  // },
];
function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
