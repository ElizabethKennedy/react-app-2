import { useState, useEffect } from "react";
import{ useParams } from "react-router-dom"; 

export default function singleFilmPage (props) {
    let [item,setItem] = useState(true);

    let { id } = useParams();

    async function getFilm() {
        let res = fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
        let film = await (await res).json();
        setItem(film)
        setIsLoading
        .then((res) )
        .then 
        .catch 
    }
}
<div>
  <div>
    <img src={`${item.image}`} alt={`${item.title} Poster`} />
  </div>
  <div>
    <h1>{item.title}</h1>
    <p>
      Directed by {item.director}. Produced by {item.producer}.
    </p>
    <p>
      The film was released in <strong>{item.release_date}</strong> and garnered
      a <strong>{item.rt_score}</strong> aggregate score on{" "}
      <a
        href="https://www.rottentomatoes.com/"
        target="_blank"
        rel="noreferrer"
      >
        Rotten Tomatoes
      </a>
      .
    </p>
    <h2>Description</h2>
    <p>{item.description}</p>
  </div>
</div>