import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Main from "./components/Main";
import CreateChat from "./components/CreateChat/CreateChat";
import SignIn from "./components/SignIn";
import User from "./components/User/User";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Main />} />
              <Route path="create-chat" element={<CreateChat />} />
              <Route path="user/:login" element={<User />} />
              <Route path="*" element={<>NOT FOUND</>} />
            </Route>
            <Route path="sign-in" element={<SignIn />} />
          </Routes>
        </HashRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
