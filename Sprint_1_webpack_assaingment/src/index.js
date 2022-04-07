// console.log("Moazzem Hosen")



import "./index.css" // its works when loader are installed

const logo=document.getElementById("logo")

const h1=document.createElement("h1")
h1.innerText="Hello Moazzem"
h1.setAttribute("id","redcolor")

const img=document.createElement("img");
img.src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg"
img.setAttribute("id","image")


logo.append(img,h1)