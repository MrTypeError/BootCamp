let moneyLended = 10_000;
let promise = new Promise((resolve , reject)=>{


})




// promise chaining 
promise
    .this((money) =>{
        if(money === 10_000){
            console.log("yay ! , I got my money back");
        }
        return money
    }).then(amountRecived=>{
        console.log("amount recived", amountRecived)
    }).catch(error =>{
        console.error("No !!" , error.messsage)
    }).finally(()=>{
        console.log("it will be called irrespective of the outcome");
    })



// fullfilled state :- successful outcome
// rejected state :- error 
// pending state :- nither fullfilled nor rejected
// settled state :- it represents - fullfilled state / rejected state

function moneyRecived(amountRecived){
    return new Promise((resolve , reject)=>{
        if(amountRecived > moneyLended){
            resolve(amountRecived - moneyLended);
        }
        else if(amountRecived<moneyLended){
            reject(new Error("Oh Wait !! , I have recived the entire amount "));
        }
        else{
            resolve(0);
        }
    })
}


// ConvertAmount(from, to) -> response
response => structured data
{
    info:{
        rate:81
    },
    result:5*81
}

// JSON (JavaScript Object Notation)

//JavaScript Object Notation or XML is used.

cll api => requesting 


