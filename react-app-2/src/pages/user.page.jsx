import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../helpers/user.helper";

function UserPage(props) {
  let [user, setUser] = useState({});
  let [isLoading, setIsLoading] = useState(true);

  let params = useParams();

  async function onLoad() {
    let userData = await getUser(params.username);
    setUser(userData);
    setIsLoading(false);
  }

  useEffect(() => {
    onLoad();
  }, [params.username]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div className="App">
        <div className="App-header">
          <h1>User: {params.username}</h1>
          <code>{JSON.stringify(user, null, 4)}</code>
        </div>
      </div>
    );
}

export default UserPage;


/* 
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "..pages/user.card";

function UserPage(props) {
    let [user, setUser] = useState({});
    let[isLoading, setIsLoading  = useState(true);]
}*/