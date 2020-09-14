export const cookieFinder = () =>{
  let cookies = document.cookie.split("; ");
  console.log(cookies);
  console.log("IT DOES SOMETHIGN")
  for(let i = 0; i < cookies.length; i++){
    let thisCookie = cookies[i].split("=");
    console.log(thisCookie);
    if(thisCookie[0] === "holidayMakerCookie"){
      return thisCookie[1].split("Bearer")[1];
    }
  }
}

