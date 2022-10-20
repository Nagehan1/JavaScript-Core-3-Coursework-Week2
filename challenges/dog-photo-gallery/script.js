
let btn = document.getElementById("changeBtn")
let img = document.getElementById("img")
btn.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res =>res.json())
    .then((data)=>{
        img.src = data.message
    })
})
 