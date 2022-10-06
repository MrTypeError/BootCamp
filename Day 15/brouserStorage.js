document.addEventListener("DOMContentLoaded" , ()=>{
    
    document.gedocument.getElementById("name").value = sessionStorage.getItem("name")? "";
    
    document.gedocument.getElementById("name").value = localStorage.getItem("name")? "";

    document.getElementById("save").addEventListener("click", ()=>{
        const name = document.getElementById("name").value;
        sessionStorage.setItem("name",name);
    })
})