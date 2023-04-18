import { useEffect, useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "../../apollo/gql";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addMember, removeMember } from "../../redux/createChatSlice";
import { Link } from "react-router-dom";
import { Button } from "../../styled/Main";
import { AddMemberStyled, Member } from "../../styled/CreateChat";

const AddMember = () => {
  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER);
  const dispatch = useAppDispatch();
  const { members } = useAppSelector((state) => state.createChat);
  const loginRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (loginRef.current)
      getUser({ variables: { login: loginRef.current.value } });
  };

  useEffect(() => {
    if (data) {
      const user = { ...data.user, admin: false };
      dispatch(addMember(user));
    }
  }, [data]);

  return (
    <AddMemberStyled>
      <div>add member</div>
      <div>
        <input ref={loginRef} type="text" name="login" placeholder="login" />
        <Button onClick={handleAdd} disabled={loading ? true : false}>
          add
        </Button>
      </div>
      <div>{error && error.message}</div>
      <div>
        {members.map((member) => {
          return (
            <Member key={member.id}>
              <img src={member.avatarUrl} width={100} height={100} />
              <Link to={"/user/" + member.login}>{member.login}</Link>
              <Button onClick={() => dispatch(removeMember(member.login))}>
                remove
              </Button>
            </Member>
          );
        })}
      </div>
    </AddMemberStyled>
  );
};

export default AddMember;
