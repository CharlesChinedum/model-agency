import logo from "@/app/assets/logo.svg";
import Image from "next/image";

const navLinks = [
  {
    name: "Welcome",
    href: "/",
  },
  {
    name: "Features",
    href: "/",
  },
  {
    name: "Models",
    href: "/contact",
  },
  {
    name: "Contact us",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <div>
            <Image src={logo} alt="logo" width={120} height={120} />
          </div>
          <div className="flex gap-5">
            {navLinks.map((link) => (
              <span key={link.name} className="font-semibold text-[18px]">
                {link.name}
              </span>
            ))}
          </div>
          <div>
            <button className="bg-baseOrange text-white text-sm px-5 py-3 rounded-full">
              Hire our Models
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
