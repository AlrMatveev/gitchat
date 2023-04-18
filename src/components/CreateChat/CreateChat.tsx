import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPage, setInfo } from "../../redux/createChatSlice";
import AddMember from "./AddMember";
import addChat from "../../hooks/firebase/addChst";
import BindRepo from "./BindRepo";
import { Button } from "../../styled/Main";

const CreateChat = () => {
  const dispatch = useAppDispatch();
  const { page, info } = useAppSelector((state) => state.createChat);
  const { loading, added, error, pushChat } = addChat();

  if (loading) return <>Loading</>;
  if (error) return <>{error}</>;
  if (added) return <Navigate to="/" />;

  const handleNextPage = () => {
    dispatch(setPage(true));
  };

  const handleInfo: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name, value } = event.target;
    dispatch(setInfo({ ...info, [name]: value }));
  };

  return (
    <div>
      {page > 0 && (
        <Button
          onClick={() => {
            dispatch(setPage(false));
          }}
        >
          Prev
        </Button>
      )}
      {page < 2 && (
        <Button onClick={handleNextPage} disabled={info.name ? false : true}>
          Next
        </Button>
      )}
      {page === 2 && <Button onClick={() => pushChat()}>Create</Button>}
      {page === 0 && (
        <div style={{ margin: "10px" }}>
          <div>
            <input
              value={info.name}
              onChange={handleInfo}
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <br />
          <div>
            <textarea
              value={info.description}
              onChange={handleInfo}
              name="description"
              placeholder="description"
            />
          </div>
        </div>
      )}
      {page === 1 && <BindRepo />}
      {page === 2 && <AddMember />}
    </div>
  );
};

export default CreateChat;
