export async function getUser(username) {
    let res = await fetch(`https://www.codewars.com/api/v1/users/${username}`);
    if (res.ok) {
      return await res.json();
    } else {
      return {
        msg: "No user found",
        success: false,
      };
    }
  }