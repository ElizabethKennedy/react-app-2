import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../helpers/user.helper";

export default function HomePage(props) {
  let [userList, setUserList] = useState([
    "",
    "",
    "",
  ]);
  let [newUser, setNewUser] = useState("");
  let [error, setError] = useState("");

  async function addNewUser(event) {
    event.preventDefault();

    // check to see if the username is value
    let result = await getUser(newUser);

    console.log(result);

    if (result.success == false) {
      // if not show feedback
      setError(result.msg);
    } else {
      // if so add to list
      setUserList([...userList, newUser]);
      setError("");
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Home</h1>
        <form onSubmit={addNewUser}>
          <p style={{ color: "red" }}>{error}</p>
          <input
            type="text"
            value={newUser}
            onChange={(event) => setNewUser(event.target.value)}
            minLength={3}
            required
          />
          <button>Add</button>
        </form>
        <h2>View User Data</h2>
        <ul>
          {userList.map((username) => {
            return (
              <li key={username}>
                <Link to={`/user/${username}`}>{username}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
	






/*import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, NotFoundPage } from "./views";

export default function HomePage(props) {
    const [text, setText] = useState("";
    const [list, setList] = useState(["ready", "set", "GO"]);

    function onSubmit(event) {
        event.preventDefault();

        let newList = [...list, text];
        setList(newList);
        setText(""),
    }

    return<div>
        <h1>Learning React</h1>
        <form onSubmit={onSubmit}>
            <input
              type="text"
              name="listItem"
              id="listItem"
              value={text}
              onChange={(e) => setText(e.target.value)}
              />

             <button type="submit">Add</button> 
        </form>
        <ul>
            {list.map(item,idx) => {
                return <li key={idx}>{item}</li>;
            })}
            </ul>
    </div>
    );
}

function HomePage(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="films" element={<FilmsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </BrowserRouter>
    );
}
}
export default HomePage;*/
