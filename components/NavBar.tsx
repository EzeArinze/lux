import Logo from "./Logo";
import Menu from "./Menu";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  return (
    <div className="flex justify-between w-full items-center py-4">
      <Logo />
      <NavBarLinks />
      <Menu />
    </div>
  );
}

export default NavBar;
