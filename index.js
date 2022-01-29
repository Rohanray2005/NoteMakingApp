console.log("hello");

let addbtn = document.getElementsByClassName("addbtn")[0];

showNotes();

localStorage.setItem("notes","");

addbtn.addEventListener("click",function(){
    
    let addtxt = document.getElementById("Textarea1");

    let notes1 = localStorage.getItem("notes");

    // if(notes1==null){
    //     notesObj = [];
    // }else{
    //     //notesObj=[];
    //     notesObj = Array(notes1);
    // }
    notesObj = JSON.parse(localStorage.getItem("notes") || "[]");
    notesObj.push(addtxt.value);
    
    localStorage.setItem("notes",JSON.stringify(notesObj));
    
    addtxt.value="";

    showNotes();
});

function showNotes(){
    let notes1 = localStorage.getItem("notes");

    // if(notes1==null){
    //     notesObj = [];
    // }else{
    //     //notesObj=[];
    //     notesObj = Array(notes1);
    // }
    notesObj = JSON.parse(localStorage.getItem("notes") || "[]");

    let html = "";
    notesObj.forEach(function(element, index) {
        html+= `
          <div class=" col-4 card"  style="margin:40px">
            <div class="card-body">
              <h5 class="card-title">Note ${index+1}</h5>
              <p class="card-text">${element}</p>
              <a href="#" id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete</a>
            </div>
          </div>
        `
    });
    notesEle = document.getElementsByClassName("notes")[0];

    if(notesObj == null){
        notesEle.innerHTML = "No notes to display";
    }else{
        notesEle.innerHTML = html;
    }
}


function deleteNode(index){
    notesObj = JSON.parse(localStorage.getItem("notes") || "[]");

    notesObj.splice(index,1);

    localStorage.setItem("notes",JSON.stringify(notesObj));

    showNotes();
}

