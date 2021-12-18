"use strict"
{


    const openbutton1 = document.getElementById("openbutton1")
    const openbutton2 = document.getElementById("openbutton2")
    const openbutton3 = document.getElementById("openbutton3")
    const openbutton4 = document.getElementById("openbutton4")
    const openbutton5 = document.getElementById("openbutton5")
  
  
    const closebutton1 = document.getElementById("closebutton1")
    const closebutton2 = document.getElementById("closebutton2")
    const closebutton3 = document.getElementById("closebutton3")
    const closebutton4 = document.getElementById("closebutton4")
    const closebutton5 = document.getElementById("closebutton5")
  

  const total1 = document.getElementById("total1")
  const total2 = document.getElementById("total2")
  const total3 = document.getElementById("total3")
  const total4 = document.getElementById("total4")
  const total5 = document.getElementById("total5")




closebutton1.classList.add("hidden")
total1.classList.add("hidden")

closebutton2.classList.add("hidden")
total2.classList.add("hidden")

closebutton3.classList.add("hidden")
total3.classList.add("hidden")

closebutton4.classList.add("hidden")
total4.classList.add("hidden")

closebutton5.classList.add("hidden")
total5.classList.add("hidden")




function openmenu(){

  openbutton1.addEventListener("click", () => {
    openbutton1.classList.add("hidden")
    closebutton1.classList.remove("hidden")
  total1.classList.remove("hidden")
  })


  openbutton2.addEventListener("click", () => {
    openbutton2.classList.add("hidden")
    closebutton2.classList.remove("hidden")
  total2.classList.remove("hidden")
  })
  

  openbutton3.addEventListener("click", () => {
    openbutton3.classList.add("hidden")
    closebutton3.classList.remove("hidden")
  total3.classList.remove("hidden")
  })


  openbutton4.addEventListener("click", () => {
    openbutton4.classList.add("hidden")
    closebutton4.classList.remove("hidden")
  total4.classList.remove("hidden")
  })



  openbutton5.addEventListener("click", () => {
    openbutton5.classList.add("hidden")
    closebutton5.classList.remove("hidden")
  total5.classList.remove("hidden")
  })

}
openmenu()


function closemenu(){
  
  closebutton1.addEventListener("click", () => {
  total1.classList.add("hidden")
  openbutton1.classList.remove("hidden")
  closebutton1.classList.add("hidden")
})

  closebutton2.addEventListener("click", () => {
  total2.classList.add("hidden")
  openbutton2.classList.remove("hidden")
  closebutton2.classList.add("hidden")
})


closebutton3.addEventListener("click", () => {
total3.classList.add("hidden")
openbutton3.classList.remove("hidden")
closebutton3.classList.add("hidden")
})


closebutton4.addEventListener("click", () => {
total4.classList.add("hidden")
openbutton4.classList.remove("hidden")
closebutton4.classList.add("hidden")
})


closebutton5.addEventListener("click", () => {
total5.classList.add("hidden")
openbutton5.classList.remove("hidden")
closebutton5.classList.add("hidden")
})


}
closemenu()


}