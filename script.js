const statusMessage=document.querySelector("#status-message");
const links=document.querySelectorAll("[data-status]");
const defaultStatus="3 object(s)";
links.forEach(link=>{
["mouseenter","focus"].forEach(ev=>link.addEventListener(ev,()=>statusMessage.textContent=link.dataset.status));
["mouseleave","blur"].forEach(ev=>link.addEventListener(ev,()=>statusMessage.textContent=defaultStatus));
});
window.addEventListener("DOMContentLoaded",()=>{
const win=document.getElementById("readme-window");
const open=document.getElementById("open-readme");
const close=document.getElementById("close-readme");
const doc=document.querySelector(".notepad-document");
if(!win||!open||!close)return;
open.addEventListener("click",e=>{
e.preventDefault();
win.classList.remove("hidden");
document.body.classList.add("dialog-open");
if(doc)doc.focus();
});
close.addEventListener("click",()=>{win.classList.add("hidden");document.body.classList.remove("dialog-open");});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close.click();});
});
