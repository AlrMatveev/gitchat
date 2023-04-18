import { auth } from "../FIREBASE";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { GithubAuthProvider } from "firebase/auth";
import { Button, ContainerWraper } from "../styled/Main";

function SignIn() {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  if (loading) return <div>Loading</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    const accessToken =
      GithubAuthProvider.credentialFromResult(user)?.accessToken;
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      return <>access token: {accessToken}</>;
    }
  }

  if (user) return <Navigate to={"/"} replace={true} />;

  return (
    <ContainerWraper>
      <Button onClick={() => signInWithGithub()}>Sign in with GitHub</Button>
    </ContainerWraper>
  );
}

export default SignIn;
