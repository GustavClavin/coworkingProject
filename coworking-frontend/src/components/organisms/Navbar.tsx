import { useNavigate, Link,  } from "react-router-dom";
import { lazy } from "react";
import { HouseIcon, LogoutIcon, UserIcon } from "../atoms/Icons";
import { useUser } from "../../utils/contexts/UserContext";
import { useModal } from "../../utils/contexts/ModalContext";

const Modal = lazy(() => import("../templates/Modal"))


const Navbar = () => {
  const navigate = useNavigate();
  
  const user = useUser();
  const modal = useModal()
  const { openModal } = useModal();

  

  const handleNavbarClick = (e: React.MouseEvent<HTMLElement>) => {
    switch (e.currentTarget.id) {
      case "home":
        navigate('/');
        window.scrollTo(0, 0)
        break;

      case "account":
        navigate(`/account/${user.user?.email}`);
        break;

      case "logout":
        if (user.user) {
          user.logout(user.user);
          modal.closeModal()
          navigate('/');
        }
        break;

      case "login":
        openModal();
        break;

      default:
        break;
    }
  };

  return (
    <div className="navbar">
      <Modal />
      <div className="">
        <ul className="">
          <li onClick={handleNavbarClick} id="home">
          <div className="pageicon"><HouseIcon /></div>
          </li>
          {user.user?.email ? (
            <li>
              <div onClick={handleNavbarClick} id="logout">
                
                <div className="pageicon"><LogoutIcon /></div>
              </div>
              <div onClick={handleNavbarClick} id="account">
                <div className="pageicon"><UserIcon /></div>
              </div>
            </li>
          ) : (
            <li onClick={openModal} id="login">
              <div className="pageicon"><UserIcon /></div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;




