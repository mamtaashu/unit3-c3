document.querySelector("#submit").addEventListener("click",() =>{
    // console.log(1)
         
var arr=JSON.parse(localStorage.getItem("user")) || []
    // var card=JSON.parse(localStorage.getItem(""))

    var objarr={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        address:document.querySelector("#address").value,
        wallet:document.querySelector("#amount").value,
    }
    // console.log(objarr)
    arr.push(objarr)
    console.log(arr)

    localStorage.setItem("user",JSON.stringify(arr))
})

