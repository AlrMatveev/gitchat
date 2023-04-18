import { useParams } from "react-router-dom";
import { GET_FACE } from "../../apollo/gql";
import { useQuery } from "@apollo/client";
import { UserContainer } from "../../styled/User";
import Info from "./Info";
import Repositories from "./Repositories";

const User = () => {
  let { login } = useParams();
  const { error, loading, data } = useQuery(GET_FACE, {
    variables: { login: login },
  });
  if (loading) return <>Loading</>;
  if (error) return <>{error.message}</>;

  if (!login) return <>NO LOGIN</>;

  const { avatarUrl, name, url, repositories } = data.user;

  return (
    <UserContainer>
      <Info avatarUrl={avatarUrl} name={name} login={login} url={url} />
      <Repositories repositories={repositories} />
    </UserContainer>
  );
};

export default User;
