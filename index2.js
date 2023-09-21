var TabLinks=document.getElementsByClassName("tabLinks");
var TabContents=document.getElementsByClassName("tabContents");

function openTab(TabName){
    for(TabLink of TabLinks){
        TabLink.classList.remove("skillLink")
    }
    for(TabContent of TabContents){
        TabContent.classList.remove("skillTab")
    }
    event.currentTarget.classList.add("skillLink")
    document.getElementById(TabName).classList.add("skillTab")
}

var sidemenu= document.getElementById("sideMenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

///////////////////////////////////////////

const scriptURL = 'https://script.google.com/macros/s/AKfycbyrjAl0wHdmyFGd0MPZ7TVIqJU8tC2V-CU1j9h-hv4ksnmXuPcM2VMuHIBo0lLxsAg0gg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="Message Sent Successfully"
                         setTimeout(function(){
                            msg.innerHTML=""
                        },5000)
                        form.reset();
                           })
      .catch(error => console.error('Error!', error.message))
  })