import logo from "../assets/image/logoDocala.webp";
import profile from "../assets/image/profile.webp";
const Navbar = () => {
  return (
    <nav className=" shadow-lg rounded-b-sm bg-purple-800 py-1">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src={logo} className="h-14 py-1 ps-3" />
          <span className="text-2xl font-semibold whitespace-nowrap text-blue-200">
            ocala
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-sm font-medium whitespace-nowrap text-pink-50">
            Zakieh mobaraky
          </span>
          <img
            className="w-12 h-12 rounded-full mx-3"
            src={profile}
            alt="user photo"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
