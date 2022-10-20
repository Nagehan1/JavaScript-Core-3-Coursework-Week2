let imgDom = document.createElement("img")
fetch("https://xkcd.now.sh/?comic=latest")
.then(res =>res.json())

.then((data)=>{
        console.log(data);
     imgDom.src = data.img 
     document.body.append(imgDom)  
    })
.catch(err =>console.log('err'))