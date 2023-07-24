let task=document.querySelector("#add"),
addBtn=document.querySelector("#abtn"),
th=document.querySelector("#thead"),
list=document.querySelector("#t");


addBtn.onclick=function(){
    let t=task.value;
    if (t=="") {
        alert("Write something first!");
    }
    else{
        th.style.display="flex";
        let li= document.createElement("li");
        let inp = document.createElement("input");
        inp.type="checkbox";
        inp.className="cb";
        li.appendChild(inp);
        let p=document.createElement("input");
        p.value=t;
        p.className="ta";
        p.disabled=true;
        li.appendChild(p);
        let ed=document.createElement("img");
        ed.src="img/edit.png";
        ed.id="ed";
        li.appendChild(ed);
        let del=document.createElement("img");
        del.src="img/delete.png";
        del.id="del";
        li.appendChild(del);
        var today = new Date();
        var date = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes();
        let curr=document.createElement("text");
        curr.innerHTML=date+"&nbsp;&nbsp;"+time;
        li.appendChild(curr);
        list.appendChild(li);
    }
    task.value="";
}

list.addEventListener("click",function(e){
    if (e.target.tagName=="INPUT") {
        if (e.target.nextSibling.style.textDecoration=="line-through") {
            e.target.nextSibling.style.textDecoration="none";
            e.target.nextSibling.style.color="white";
        }
        else{
            e.target.nextSibling.style.textDecoration="line-through";
            e.target.nextSibling.style.color="yellow";
        } 
    }
    else if(e.target.id=="ed"){
        e.target.src="img/tick.png";
        if (e.target.previousSibling.disabled==false) {
            e.target.previousSibling.style.backgroundColor="rgb(29, 29, 29)";
            e.target.previousSibling.disabled=true;
            e.target.src="img/edit.png";
        }
        else{
            let content=e.target.previousSibling.value;
            e.target.previousSibling.disabled=false;                    
            e.target.previousSibling.style.backgroundColor="rgb(20, 20, 20)";
            if(e.target.previousSibling.value==""){
                e.target.previousSibling.value=content;
            }
        }
    }
    else if(e.target.id=="del"){
        e.target.parentElement.remove();
        if (document.querySelectorAll("#t li").length==1) {
            th.style.display="none";
        }
    }
    
},false);
