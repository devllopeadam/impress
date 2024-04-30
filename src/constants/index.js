import { Blog1, Blog2, Blog3, Facebook, Features1, Features2, Features3, Features4, Features5, Features6, Instagrame, Linkedin, Logo1, Logo2, Logo3, Logo4, Logo5, Mail, Message, Phone, Testimonial1, Testimonial2, Testimonial3, Tiktok, X, Youtube } from "../assets";

const links = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
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

const featuresCards = [
  {
    title: "Intuitive Interface",
    subtitle: "",
    srcImg: Features1,
    type: "big1"
  },
  {
    title: "Powerful features",
    subtitle: "No matter what you are looking for, we have it.",
    srcImg: Features2,
    type: "simple"
  },
  {
    title: "Collaborative Editing",
    subtitle: "With Impress, collaboration is seamless. Work with your team in real-time, stay synchronized wherever you are.",
    srcImg: Features3,
    type: "simple",
  },
  {
    title: "Seamless integration",
    subtitle: "Seamlessly integrate with your favorite tools and platforms, enhancing your workflow.",
    srcImg: Features4,
    type: "simple"
  },
  {
    title: "Fast payouts",
    subtitle: "Forget about waiting for your payment for weeks. Our payouts are delivered within 3 working days.",
    srcImg: Features5,
    type: "big2"
  },
  {
    title: "Lightning fast",
    subtitle: "We always focus on optimization and performance of our tool.",
    srcImg: Features6,
    type: "simple"
  },
];

const statistics = [
  { number: "120%", label: "Increase in website traffic by using Impress." },
  { number: "80%", label: "Improvement in reader engagement.." },
  { number: "137%", label: "Increase in pages quality and content relevance" },
  { number: "$12B+", label: "Increase in revenue by our clients utilizing Impress" },
];

const testimonials = [
  { image: Testimonial1, name: "John Doe", logoCompany: Logo3 },
  { image: Testimonial2, name: "Sarah Johnson", logoCompany: Logo2 },
  { image: Testimonial3, name: "Ryan Gosling", logoCompany: Logo4 },
];


const blogsSection = [
  {
    image: Blog1,
    category: "Company news",
    date: "Jan 23, 2025",
    blogName: "7 Must Have Tools For Web Designers"
  },

  {
    image: Blog2,
    category: "Insights",
    date: "Dec 4, 2024",
    blogName: "20 Myths About Web Design"
  },
  {
    image: Blog3,
    category: "Tech Tips",
    date: "Aug 26, 2024",
    blogName: "7 Things About Web Design Your Boss Wants To Know"
  },

];

const variants = {
  animate: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};


export {
  links,
  row1,
  row2,
  logos,
  featuresCards,
  variants,
  statistics,
  blogsSection,
  testimonials,
};