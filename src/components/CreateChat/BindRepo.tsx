import { useQuery } from "@apollo/client";
import { GET_VIEWER_REPO } from "../../apollo/gql";

interface IRepo {
  id: string;
  createAt: number;
  name: string;
}

const BindRepo = () => {
  const { error, loading, data } = useQuery(GET_VIEWER_REPO);

  if (loading) return <>Loading</>;
  if (error) return <>{error.message}</>;

  let repos = null;
  if (data) {
    repos = [...data.viewer.repositories.nodes];
    repos.reverse();
  }
  return (
    <div>
      not working yet
      {repos
        ? repos.map((repo: IRepo) => {
            return (
              <div key={repo.id}>
                <input type="radio" name="drone" value={repo.name} />
                <span>{repo.name}</span>
              </div>
            );
          })
        : "No repositories"}
    </div>
  );
};

export default BindRepo;
