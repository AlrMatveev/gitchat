import { InfoStyle } from "../../styled/User";

interface IInfoProps {
  avatarUrl: string;
  name: string;
  login: string;
  url: string;
}

const Info = ({ avatarUrl, name, login, url }: IInfoProps) => {
  return (
    <InfoStyle>
      <div>
        <img src={avatarUrl} />
      </div>
      <div>{name ? name : "NoName"}</div>
      <div>
        <a href={url} target="_blank">
          {login}
        </a>
      </div>
    </InfoStyle>
  );
};

export default Info;
