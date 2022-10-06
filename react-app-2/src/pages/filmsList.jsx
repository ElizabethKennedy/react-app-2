import { useState, useEffect } from "react";
import {getData} from ".components/helpers/data";

function filmslist(props) {

    let [list, setList] = useState([]);
    let (loading, isLoading) = useState(true);

}

async function getFilms () {
    let list = await getData ("films");
    setList(list);
    setIsLoading(false);
}

useEffect(() => {
    getFilms();
}, []);

if (isLoading) {
    return <p>Loading...</p>;
    } else {
        return (
            <ul>
            {list.map((film) => (
                <li key={film.id}>{film.title}</li>

            ))}
            </ul>
        );
    }

    function getFilms() {
        fetch()
        .then((res) => res.json())
        .then((list) => setList)
        .then()
    } 

    export default filmslist;
