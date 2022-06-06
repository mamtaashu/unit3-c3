var data=JSON.parse(localStorage.getItem("purchase")) || []
console.log(data)

append(data)
function append(data){
    // console.log(data)
    data.forEach(element => {
        // console.log(element.name,element.image,element.price)

        var div=document.createElement("div")
        div.setAttribute("class","voucher")

        var image=document.createElement("img")
        image.src=element.image;

        var name=document.createElement("p")
        name.innerText=element.name;

        var price=document.createElement("p")
        price.innerText=element.price;


        
        // var button=document.createElement("button")
        // button.setAttribute("class","buy_voucher")
        // button.innerText="BUY"
        // button.addEventListener("click", () =>{
        //     // console.log(1)
        //     b.push(element)
        //     localStorage.setItem("purchase",JSON.stringify(b))
        //     // window.location.href="purchase.html"
// console.log(b)
            
        // })
div.append(image,name,price)
document.querySelector("#purchased_vouchers").append(div)

    });
}