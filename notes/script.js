const buttonel=document.querySelector(".button"); // got control over button
const notescontainerel=document.querySelector(".notes-container"); //u got the notes container in hand
//u can manupulate it on your own wish


//show the notes after updating the notes means after refreshing
function shownotes(){
    notescontainerel.innerHTML=localStorage.getItem("notes");
}
shownotes();

//local storage
function updatestorage(){
    localStorage.setItem("notes",notescontainerel.innerHTML);
}

buttonel.addEventListener("click",function(){
      //as soon as you clicked on the button , through the help of javascript code below a 
      //a new notes container will appear on the screen 
      //there will be no role of html in creating the input container

      let inputbox=document.createElement("p");
      let img=document.createElement("img");

      inputbox.className="input-box";
      inputbox.setAttribute("contenteditable","true");
      img.src="images/delete.png";
      notescontainerel.appendChild(inputbox).appendChild(img);
})

//when you click on delete icon 
notescontainerel.addEventListener("click",function(e){
    //e is the event object which is inside the container and 
    //as we click onto that e object then the function is revoked
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName==="P"){ //getting into the notes container "p"(inputbox) element
         notes=document.querySelectorAll(".input-box");
         notes.forEach(nt => { //this is for updating each and every value at local storage
            nt.onkeyup=function(){ 
                updatestorage();
            }
         })
    }   
})
//for enter key
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


