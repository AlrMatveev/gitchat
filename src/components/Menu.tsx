import { signOut } from "firebase/auth";
import { auth } from "../FIREBASE";
import { MenuWraper, MenuLinks } from "../styled/MainMenu";
import { Button } from "../styled/Main";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const Menu = () => {
  const { login } = useAppSelector((state) => state.user);
  const logout = () => {
    localStorage.clear();
    signOut(auth);
  };

  return (
    <MenuWraper>
      <MenuLinks>
        <Link to={"/"}>Chats</Link>
        <Link to={"create-chat"}>CreateChat</Link>
        <Link to={"/user/" + login}>Account</Link>
      </MenuLinks>
      <Button onClick={logout}>Sign Out</Button>
    </MenuWraper>
  );
};

export default Menu;
