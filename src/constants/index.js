import { Facebook, Instagrame, Linkedin, Mail, Message, Phone, Tiktok, X, Youtube } from "../assets";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const row1 = [
  {
    title: "Pages",
    links: [
      { label: "Homepage", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ]
  }, {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ]
  },
  {
    title: "Utility",
    links: [
      { label: "Instructions", href: "#" },
      { label: "Style Guide", href: "#" },
      { label: "License", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Error 404", href: "#" },
    ]
  },
  { title: "Subscribe to newsletter", type: "input" }
];

const row2 = {
  first: [Mail, Phone, Message],
  second: [Facebook, Instagrame, X, Linkedin, Tiktok, Youtube]
};


export {
  links,
  row1,
  row2
};