const btn1=document.getElementById("btn");
btn1.addEventListener("click",()=>{
    const para=document.createElement("p");
 para.innerHTML="<h1> This is a new paragraph";
 // para.textContent = "This is a new paragraph";
    para.style.color="white";
    para.style.backgroundColor="black";
    document.body.appendChild(para);
})