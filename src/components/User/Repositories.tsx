import { RepositoriesWraper, RepositoryContainer } from "../../styled/User";

const Repositories = ({ repositories }: any) => {
  const { totalCount, nodes } = repositories;
  const repos = [...nodes].reverse();
  return (
    <RepositoriesWraper>
      <div>Repositories: {totalCount}</div>

      {repos.map((repo: any) => {
        return (
          <RepositoryContainer key={repo.id}>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <a href={repo.url}>{repo.name}</a>
              </div>
              <div>Stars: {repo.stargazerCount}</div>
            </div>
            <div>
              Created: {repo.pushedAt}, Updated: {repo.updatedAt}
            </div>
            <div style={{ display: "flex" }}>
              {repo.languages.nodes.map((language: any) => {
                return (
                  <div
                    key={language.id}
                    style={{
                      margin: "5px",
                      padding: "5px",
                      color: language.color,
                    }}
                  >
                    {language.name}
                  </div>
                );
              })}
            </div>
          </RepositoryContainer>
        );
      })}
    </RepositoriesWraper>
  );
};

export default Repositories;
