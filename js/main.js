let turn =document.querySelector(".turn i");

let mydivs = document.querySelectorAll(".nav , .icons , a")
let body = document.querySelector("body");

turn.onclick = function(){

    if(body.classList .contains("dark")){
        mydivs[0].classList.remove("darkcontent")
        mydivs[1].classList.remove("darkcontent")
        mydivs[2].classList.remove("darkcontent")
        //mydivs[3].classList.remove("darkcontent")
        //mydivs[4].classList.remove("darkcontent")
        body.classList.remove("dark")


        body.classList.add("light")
    }else{

     
        body.classList.add("dark")
        mydivs[0].classList.add("darkcontent")
        mydivs[1].classList.add("darkcontent")
        mydivs[2].classList.add("darkcontent")
        //mydivs[3].classList.add("darkcontent")
        //mydivs[4].classList.add("darkcontent")
        body.classList.replace("light","dark")

    }

}