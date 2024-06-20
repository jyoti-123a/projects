
import BagsFootwear from "./data/BagsFootwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronics.js"
import HomeKitchen from "./data/HomeKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Kids from "./data/Kids.js"
import WomenEthics from "./data/WomenEthics.js"
import WomenWestorn from "./data/WomenWestorn.js"
import Men from "./data/Men.js"


let inputSearchE1 = document.querySelector(".inputSearch")
let recentInput = []
let formInputE1 = document.getElementById("inputform")
const listoRecentE1 = document.querySelector(".listofRecent")


inputSearchE1.addEventListener("keydown",()=>{
   // console.log(inputSearchE1)
    if(inputSearchE1.value){
        document.getElementById("closeSearch").style.display = "block"
    }
    else{
        document.getElementById("closeSearch").style.display = "none"
    }
})
formInputE1.addEventListener("submit",(e)=>{
    e.preventDefault()
    let listofRecentHTMLE1 = ""

    recentInput.unshift(inputSearchE1.value)
    console.log(recentInput)

    if(recentInput.length > 0){
    for(let i = 0; i < recentInput.length; i++)
    {                      
     listofRecentHTMLE1 +=`
       <div class="recentItem">
     <div class="recentIcon">
         <img src="cimg/s1.jpg"></img>
     </div>
     <p>${recentInput[i]}</p>
   </div>
   `
    }
    listofRecentHTMLE1.innerHtml = listofRecentHTMLE1
}

})

/***WomenEthics***/
let womenEthnics = document.getElementById("womenEthnics")
function womenEthnicsFunc(){
return WomenEthics.map(el =>{
        let list = "";

       list = el.data.forEach(element =>{
        console.log(element)
            return `
             <p>${element}</p>
            `
        })
        console.log(list)

        return `
        <div class="column">
          <h4>${e.heading}</h4>
          ${list}
        </div>
        `
    }).join("")
}
womenEthnics.innerHTML = womenEthnicsFunc()






