import { FC, useState, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { FaShoppingCart, FaCog } from "react-icons/fa";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

interface NavbarProps {
  quantity?: number;
  onClick?: React.MouseEventHandler;
}

const Navbar: FC<NavbarProps> = ({ quantity, onClick }) => {
  const username = Cookies.get("username");
  const navigate: NavigateFunction = useNavigate();
  const [showSettingsDropdown, setShowSettingsDropdown] =
    useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>("");

  const toggleSettingsDropdown = () => {
    setShowSettingsDropdown(!showSettingsDropdown);
  };

  const getTimezone = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Selamat Pagi");
    } else if (currentHour >= 12 && currentHour < 15) {
      setGreeting("Selamat Siang");
    } else if (currentHour >= 15 && currentHour < 18) {
      setGreeting("Selamat Sore");
    } else {
      setGreeting("Selamat Malam");
    }
  };

  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("token");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Successfully Logout",
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
    }).then((response) => {
      if (response?.isConfirmed) {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    getTimezone();
  }, []);

  return (
    <nav className="bg-white rounded-md shadow-md w-screen p-7 sticky z-10 fixed top-0">
      <div className="flex justify-between items-center space-x-4">
        <div className="text-emerald-700 font-semibold text-xl">
          {greeting}, {username ? username : "User"}
        </div>
        <div className="flex items-center space-x-12">
          <div className="cursor-pointer flex items-center" onClick={onClick}>
            <BsEye className="text-emerald-700 text-lg mx-2" />
          </div>
          <div className="cursor-pointer flex items-center">
            <FaShoppingCart className="text-emerald-700 text-lg mx-2" /> :{" "}
            {quantity ? quantity : 0}
          </div>
          <div className="relative">
            <div className="cursor-pointer" onClick={toggleSettingsDropdown}>
              <FaCog className="text-emerald-700 text-lg" />
            </div>
            {showSettingsDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded">
                <div className="py-2">
                  <a
                    onClick={() => handleLogout()}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
