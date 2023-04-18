import { auth } from "../FIREBASE";
import { useIdToken } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { Container, ContainerWraper } from "../styled/Main";
import { useAppDispatch } from "../hooks/redux";
import { setUser } from "../redux/userSlice";
import Menu from "./Menu";

function App() {
  const [user, loading, error] = useIdToken(auth);
  const dispatch = useAppDispatch();

  if (loading) return <div>Loading</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    //@ts-ignore
    dispatch(setUser(user.reloadUserInfo));
    return (
      <>
        <Menu />
        <ContainerWraper>
          <Container>
            <Outlet />
          </Container>
        </ContainerWraper>
      </>
    );
  }

  return <Navigate to={"sign-in"} />;
}

export default App;
