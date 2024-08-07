import { ArrowIcon } from "./arrow";
import { ArrowDownIcon } from "./arrow-down";
import { CircleIcon } from "./circle";
import { CloseIcon } from "./close";
import { DrinkIcon } from "./drink";
import { EmailIcon } from "./email";
import { FacebookIcon } from "./facebook";
import { FileUploadIcon } from "./file-upload";
import { ForksIcon } from "./forks";
import { GearIcon } from "./gear";
import { GithubIcon } from "./github";
import { HeartIcon } from "./heart";
import { HotelIcon } from "./hotel";
import { InstagramIcon } from "./instagram";
import { LinkedinIcon } from "./linkedin";
import { LiveIcon } from "./live";
import { LiveCircleIcon } from "./live-circle";
import { MastodonIcon } from "./mastodon";
import { MenuIcon } from "./menu";
import { MinusIcon } from "./minus";
import { PlusIcon } from "./plus";
import { SignOutIcon } from "./signout";
import { StarIcon } from "./star";
import { TicketsIcon } from "./tickets";
import { TShirtIcon } from "./tshirt";
import { TwitterIcon } from "./twitter";
import type { Icon } from "./types";
import { UserIcon } from "./user";
import { WebIcon } from "./web";

export const getIcon = (name: Icon) => {
  switch (name) {
    case "twitter":
      return TwitterIcon;
    case "github":
      return GithubIcon;
    case "instagram":
      return InstagramIcon;
    case "facebook":
      return FacebookIcon;
    case "arrow-down":
      return ArrowDownIcon;
    case "close":
      return CloseIcon;
    case "linkedin":
      return LinkedinIcon;
    case "menu":
      return MenuIcon;
    case "plus":
      return PlusIcon;
    case "tickets":
      return TicketsIcon;
    case "arrow":
      return ArrowIcon;
    case "hotel":
      return HotelIcon;
    case "mastodon":
      return MastodonIcon;
    case "minus":
      return MinusIcon;
    case "star":
      return StarIcon;
    case "tshirt":
      return TShirtIcon;
    case "user":
      return UserIcon;
    case "heart":
      return HeartIcon;
    case "live":
      return LiveIcon;
    case "sign-out":
      return SignOutIcon;
    case "gear":
      return GearIcon;
    case "email":
      return EmailIcon;
    case "circle":
      return CircleIcon;
    case "web":
      return WebIcon;
    case "drink":
      return DrinkIcon;
    case "forks":
      return ForksIcon;
    case "live-circle":
      return LiveCircleIcon;
    case "file-upload":
      return FileUploadIcon;
  }
};
