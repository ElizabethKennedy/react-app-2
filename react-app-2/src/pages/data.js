export async function getData (category) {
    try {
        let res= await fetch(`https://ghibliapi.herokuapp.com/${category}`);
        return await res.json();
    }   catch (err) {
        console.error(err);
        return false;
    }
}