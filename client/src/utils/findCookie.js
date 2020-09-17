export const cookieFinder = () =>{
  let cookies = document.cookie.split("; ");
  for(let i = 0; i < cookies.length; i++){
    let thisCookie = cookies[i].split("=");
    if(thisCookie[0] === "holidayMakerCookie"){
      return thisCookie[1].split("Bearer")[1];
    }
  }
}

