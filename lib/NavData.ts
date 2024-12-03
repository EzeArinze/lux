interface NavLink {
  title: string;
  links: string;
}

const NavData: NavLink[] = [
  {
    title: "About",
    links: "/about",
  },
  {
    title: "Contact",
    links: "/contact",
  },
  {
    title: "Order",
    links: "/order",
  },
  {
    title: "Projects",
    links: "/works",
  },
];

export default NavData;
