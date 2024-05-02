import { Blog1, Blog2, Blog3, Blog7, Blog8, Blog9, Check, Facebook, Features1, Features2, Features3, Features4, Features5, Features6, Instagrame, Linkedin, Logo1, Logo2, Logo3, Logo4, Logo5, Mail, Member1, Member2, Member3, Member4, Message, Minus, Phone, Testimonial1, Testimonial2, Testimonial3, Tiktok, X, Youtube } from "../assets";

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
    image: Blog9,
    category: "Company news",
    date: "Jan 23, 2025",
    blogName: "7 Must Have Tools For Web Designers"
  },
  {
    image: Blog8,
    category: "Insights",
    date: "Dec 4, 2024",
    blogName: "20 Myths About Web Design"
  },
  {
    image: Blog7,
    category: "Tech Tips",
    date: "Aug 26, 2024",
    blogName: "7 Things About Web Design Your Boss Wants To Know"
  },

];

const questions = [
  {
    question: "How do I sign up for Impress?",
    response: "The definitive Webflow template for SaaS companies, blending sleek design, seamless functionality, and powerful features to elevate your online presence instantly."
  },
  {
    question: "Is Impress compatible with all devices?",
    response: "The definitive Webflow template for SaaS companies, blending sleek design, seamless functionality, and powerful features to elevate your online presence instantly."
  },
  {
    question: "Can I cancel my subscription at any time?",
    response: "The definitive Webflow template for SaaS companies, blending sleek design, seamless functionality, and powerful features to elevate your online presence instantly."
  },
  {
    question: "Are my files and data secure with Impress?",
    response: "The definitive Webflow template for SaaS companies, blending sleek design, seamless functionality, and powerful features to elevate your online presence instantly."
  },
  {
    question: "Do you offer customer support?",
    response: "The definitive Webflow template for SaaS companies, blending sleek design, seamless functionality, and powerful features to elevate your online presence instantly."
  },
];

const pricePlans = [
  {
    priceName: "Basic",
    Price: "$0",
    property: "Free forever",
    info: "Perfect for individuals and freelancers looking to create professional-quality content without breaking the bank.",
    textButton: "Try for free"
  },
  {
    priceName: "Pro",
    Price: "$49",
    property: "Per seat, billed annually",
    info: "Unlock enhanced features and increased collaboration options to streamline your workflow and boost productivity.",
    textButton: "Get Started"
  },
  {
    priceName: "Enterprise",
    Price: "$99",
    property: "Per seat, billed annually",
    info: "Enjoy advanced features, customization options, and priority support to meet your business's unique needs.",
    textButton: "Contact sales"
  },
];

const pricePlansPricing = [
  [
    {
      priceName: "Basic",
      Price: "$0",
      property: "Free forever",
      info: "Perfect for individuals and freelancers looking to create professional-quality content without breaking the bank.",
      textButton: "Try for free",
      properties: ["Ideal for individuals and freelancers", "Access to essential features", "Limited storage and collaboration capabilities"]
    },
    {
      priceName: "Pro",
      Price: "$69",
      property: "Per seat, billed monthly",
      info: "Unlock enhanced features and increased collaboration options to streamline your workflow and boost productivity.",
      textButton: "Get started",
      properties: ["Tailored for larger teams and organizations", "Advanced features for maximum flexibility and customization", "Priority support and dedicated account manager"]
    },
    {
      priceName: "Entreprise",
      Price: "$149",
      property: "Per seat, billed monthly",
      info: "Enjoy advanced features, customization options, and priority support to meet your business's unique needs.",
      textButton: "Contact sales",
      properties: ["Customized solutions for enterprise - level businesses", "Scalable features and dedicated support", "Custom pricing and additional services available upon request"]
    },
  ],
  [
    {
      priceName: "Basic",
      Price: "$0",
      property: "Free forever",
      info: "Perfect for individuals and freelancers looking to create professional-quality content without breaking the bank.",
      textButton: "Try for free",
      properties: ["Ideal for individuals and freelancers", "Access to essential features", "Limited storage and collaboration capabilities"]
    },
    {
      priceName: "Pro",
      Price: "$49",
      property: "Per seat, billed annually",
      info: "Unlock enhanced features and increased collaboration options to streamline your workflow and boost productivity.",
      textButton: "Get started",
      properties: ["Tailored for larger teams and organizations", "Advanced features for maximum flexibility and customization", "Priority support and dedicated account manager"]
    },
    {
      priceName: "Entreprise",
      Price: "$99",
      property: "Per seat, billed annually",
      info: "Enjoy advanced features, customization options, and priority support to meet your business's unique needs.",
      textButton: "Contact sales",
      properties: ["Customized solutions for enterprise - level businesses", "Scalable features and dedicated support", "Custom pricing and additional services available upon request"]
    },
  ]

];

const camparePlans = [
  { plans: "Databases", Basic: "5", Pro: "20", Entreprise: "Unlimited" },
  { plans: "Dashboards", Basic: "10", Pro: "1,000", Entreprise: "Unlimited" },
  { plans: "Collaborators", Basic: Minus, Pro: "5", Entreprise: "20" },
  { plans: "Transactions", Basic: "50", Pro: "10,000", Entreprise: "Unlimited" },
  { plans: "Priority support", Basic: Minus, Pro: Check, Entreprise: Check },
  { plans: "Monthly reports", Basic: Minus, Pro: Check, Entreprise: Check },
  { plans: "Custom branding", Basic: Minus, Pro: Check, Entreprise: Check },
  { plans: "Dedicated server", Basic: Minus, Pro: Minus, Entreprise: Check },
  { plans: "Personal manager", Basic: Minus, Pro: Minus, Entreprise: Check },
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

const members = [
  { image: Member1, name: "Emily Anderson", title: "CEO, Founder" },
  { image: Member3, name: "David Brown", title: "CPO" },
  { image: Member4, name: "Daniel Martinez", title: "COO" },
  { image: Member2, name: "John Smith", title: "CTO" },
];


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
  questions,
  pricePlans,
  pricePlansPricing,
  camparePlans,
  members,
};