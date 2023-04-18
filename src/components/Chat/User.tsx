import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_USER } from "../../apollo/gql";

interface IUserProps {
  login: string;
}

const User = ({ login }: IUserProps) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { login: login },
  });
  if (loading) return <>...</>;
  if (error) return <>{error.message}</>;

  return (
    <div>
      <img src={data.user.avatarUrl} width={30} height={30} />
      <Link to={"/user/" + login}>{login}</Link>
    </div>
  );
};

export default User;
