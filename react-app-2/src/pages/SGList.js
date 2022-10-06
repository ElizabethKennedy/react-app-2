//Studio Ghibli List//

import {Component} from "react";
import {getData} from "../../helpers/data";


getfilms(){
    fetch("https://ghibliapi.herokuapp.com/films");
    .then((res) =>res.json())
    .then((list) =>this.setState({ list, isLoading: false}))
    .catch((err) => console.error(err));
}