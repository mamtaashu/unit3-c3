var a=JSON.parse(localStorage.getItem("user")) || []

 

a.forEach(element => {
    console.log(a)
    var box=document.createElement("div")
    box.setAttribute("class","box")

    var h=document.createElement("h1")
    h.innerText=element.wallet

    box.append(h)
    document.querySelector("#b").append(box)
})

async function getData(){
    let result=await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
    let user=await result.json();
    // console.log(user);
    append(user);

}

getData();

var b=JSON.parse(localStorage.getItem("purchase"))|| [] ;
function append(data){
    // console.log(data)
    data[0].vouchers.forEach(element => {
        // console.log(element.name,element.image,element.price)

        var div=document.createElement("div")
        div.setAttribute("class","voucher")

        var image=document.createElement("img")
        image.src=element.image;

        var name=document.createElement("p")
        name.innerText=element.name;

        var price=document.createElement("p")
        price.innerText=element.price;


        
        var button=document.createElement("button")
        button.setAttribute("class","buy_voucher")
        button.innerText="BUY"
        button.addEventListener("click", () =>{
            // console.log(1)
            b.push(element)
            localStorage.setItem("purchase",JSON.stringify(b))
            window.location.href="purchase.html"
// console.log(b)
            
        })
div.append(image,name,price,button)
document.querySelector("#voucher_list").append(div)

    });
}