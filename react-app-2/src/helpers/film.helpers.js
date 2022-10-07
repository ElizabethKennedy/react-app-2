export function filterFilmsByDirector(list, director) {
  if (director) return list.filter((film) => film.director === director);
  return list;
}

export function getListOf(list, prop) {
  return [...new Set(list.map((film)=> film[prop] || ""))];
}

export function getFilmStats(list) {
  let acc_score = list.reduce((a, film) => a + parseInt(film.rt_score), 0);
  let total = list.length;
  let avg_score = acc_score / total;
  let latest = list.sort()[list.length-1];
  return { avg_score, acc_score, total, latest }
}
  
      
          
              
    /*export function filterFilmsByDirector(list,director){
    if (director == " ") {return list;
    }else{
     return list.filter((film)=>film.director==director);
    }
}
export function getListOf(list,prop){
    return list.reduce((uniqueValue,item)=>{
     if(uniqueValue.indexOf(item[prop])==-1){
        uniqueValue.push(item[prop])
     }
    },[]);
}
*/

      
          
              
                  
                      
                          
                              
                                  
                                      
                                          
                                              /*export function getListOf(list, prop) {
  //return a unique list of property values from each item in the input list
  return list.reduce{[uniqueValues, item] => {
    let value = item[prop] || "";
  //have I already found the value?
  //if no, add the value to the uniqueValues array

  if (uniqueValues.includes(value)) {
    uniqueValues.push(value);
  }
  return uniqueValues;
  },[]}; 
}

export function getFilmStats(list) {
  //what is the total score
  let acc_score = list.reduce((sum, film) => sum + parseInt(film.rt_score), 0);

  //what is total score
  let total = list.length;
  
  //what is the avg from the total score / amount of films
  let avg_score = acc_score / total;

  //what is the film with the latest release date

  let latest = list.reduce((mostRecent, film) => {
    if (mostRecent < film.release_date) {
      return film.release_date
    }
  });
  return {
    acc_score,
    avg_score,
    total,
    latest
  }

}


export function filterFilmsByDirector(list, director) {
    if (director == "") {
      return list;
    } else {
      return list.filter((film) => film.director == director);
    }
  
  }
  
  export function getListOf(list, prop) {
  
    // return a unique list of property values from each item in the input list
  
    return list.reduce((uniqueValues, item) => {
  
      let value = item[prop] || "";
  
  
  
  
      // have I already found the value?
  
      // if no, add the value to the uniqueValues array
  
      if (!uniqueValues.includes(value)) {
  
        uniqueValues.push(value);
  
      }
  
  
  
  
      return uniqueValues;
  
    }, []);
  
  }



/*import React from "react";

export default 


let filteredFilms = filterFilmsByDirector(list, searchDirector);
let directors = getListOf(list, "director");

function filterFilmsByDirector() {

}

function getListOf () {

}*/