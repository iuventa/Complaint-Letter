function openContent() {
    console.log(this);
  }


const tabs=document.getElementsByClassName("comptablink");
console.log(tabs);

for(let i=0; i<tabs.length; i++){
    tabs[i].addEventListener("click", (e)=>{
        const contentId = e.target.getAttribute("contentId");

        document.querySelector(".comptablink[activetab]").removeAttribute("activeTab");
        e.target.setAttribute("activetab", "");
        document.querySelector(".tabcontent[active]").removeAttribute("active");
        document.querySelector(`#${contentId}`).setAttribute("active", "");
    })
}

  