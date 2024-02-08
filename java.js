const ul=document.querySelector("ul");
const input=document.querySelector("input");
input.focus();
const button=document.querySelector("button");
button.addEventListener("click",()=>{
    let temp=input.value;
    input.value="";
    const li=document.createElement("li");
    const span=document.createElement("span");
    const btn=document.createElement("button");
    li.appendChild(span);
    li.appendChild(btn);
    span.textContent=temp;
    btn.textContent="Delete";
    ul.appendChild(li);
    btn.addEventListener("click",()=>{
        ul.removeChild(li);
    });
});
