document.addEventListener("DOMContentLoaded", (){
    document.querySelector("#currency-converter").addEventListener("submit", async(event)=>{
        event.preventDefault();

        const{target:{from , to , amount}} = event;
        
        let headers = new Headers();
        headers.append("apikey" , "0Hn45KSIFsOBzS2LkgcAULRvooa1cX7m")

        const requestOptions = {
            method:"GET",  // post , put ,  delete
            headers,
        }

        // let response  = await fetch(`    ` , requestOptions)
        // .then(response => response.json())
        // .then(data =>{
        //     {

        //     }
        //     let {info ,date } =data;
        //     document.querySelector(".result").textContent = `As per the exchange rate : ${info.rate} for ${date} => converted value is ${to} is ${result.toFixed(3)}`
        // });
        // .catch(error => console.log(error));
        let response = await fetch("" ,requestOptions)
        const data = await response.json();
        let {info ,date , quary:{to : convertedTo} , result} = data;



    })
})


