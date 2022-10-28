import clsx from "clsx";
import React from "react";
import { useToggle } from "react-use";
import { FacebookIcon } from "../icons/facebook";
import { InstagramIcon } from "../icons/instagram";
import { LinkedinIcon } from "../icons/linkedin";
import { TwitterIcon } from "../icons/twitter";
import { MenuButton } from "../menu-button/menu-button";
import { SocialLink } from "../social-link/social-link";
import { Color } from "../types";

type Link = {
  href: string;
  title: string;
  side: "left" | "right";
};

const MenuLinks = ({ links }: { links: Link[] }) => (
  <nav className="list-none space-y-5">
    {links.map((link) => (
      <li>
        <a href={link.href} className="text-white text-xl hover:underline">
          {link.title}
        </a>
      </li>
    ))}
  </nav>
);

const Menu = ({ links }: { links: Link[] }) => {
  const linksA = links.filter((link) => link.side === "left");
  const linksB = links.filter((link) => link.side === "right");

  return (
    <div className="p-12 py-12 sm:p-16 justify-between max-w-7xl mx-auto gap-8 grid sm:grid-cols-2 md:grid-cols-4">
      <MenuLinks links={linksA} />
      <MenuLinks links={linksB} />

      <div className="space-y-4">
        <h2 className="text-xl font-bold uppercase">Contact</h2>

        <p>
          Become a sponsor
          <br />{" "}
          <a href="mailto:sponsor@pycon.it" className="text-white underline">
            sponsor@pycon.it
          </a>
        </p>

        <p>
          Enquiries
          <br />{" "}
          <a href="mailto:help@pycon.it" className="text-white underline">
            help@pycon.it
          </a>
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="uppercase font-bold text-xl">Follow us</h2>

        <nav className="flex space-x-4 list-none">
          <li>
            <SocialLink
              href="https://twitter.com/pyconit"
              className="border-black border-4 fill-current text-black"
              icon={TwitterIcon}
              style={{
                backgroundColor: "#1D9BF0",
              }}
            >
              Twitter
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://www.facebook.com/pythonitalia/"
              className="border-black border-4 fill-current text-black"
              icon={FacebookIcon}
              style={{
                backgroundColor: "#1877F2",
              }}
            >
              Facebook
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://www.instagram.com/python.it/"
              className="border-black border-4 fill-current text-black"
              icon={InstagramIcon}
              style={{
                backgroundColor: "#FF0076",
              }}
            >
              Instagram
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://www.linkedin.com/company/pycon-italia/"
              className="border-black border-4 fill-current text-black"
              icon={LinkedinIcon}
              style={{
                backgroundColor: "#2867B2",
              }}
            >
              Linkedin
            </SocialLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export const Header = ({
  links = [],
  backgroundColor = "white",
  logo: Logo = null,
}: {
  links?: Link[];
  backgroundColor?: Color;
  logo?: React.ElementType | null;
}) => {
  const [menuOpen, toggleMenuOpen] = useToggle(false);

  return (
    <div
      className={clsx(
        "z-10",
        !menuOpen ? `bg-${backgroundColor}` : `bg-orange`
      )}
    >
      <header className="p-8 flex justify-between max-w-7xl mx-auto">
        <a href="/">{Logo && <Logo className="w-40" />}</a>

        <MenuButton onClick={toggleMenuOpen} />
      </header>

      {menuOpen ? (
        <div className="bg-orange border-t-4 border-b-4 border-black absolute z-20 w-full">
          <Menu links={links} />
        </div>
      ) : null}
    </div>
  );
};
