const product=[{
    id:0,
    image:'images/tharpoosini.jpg',
    title:'Watermelon',
    price:120,
},

{
    id:2,
   image:'images/graps.jpg',
    title:'Graps',
    price:600,
},

{
    id:3,
    image:'images/carets.jpg',
    title:'Carrots',
    price:100,
},


{
    id:4,
    image:'images/babanana.jpg',
    title:'Banana',
    price:30,
},

{
    id:5,
    image:'images/apple.jpg',
    title:'Apples',
    price:120,
},

{
    id:6,
    image:'images/kaliflower.jpg',
    title:'Kaliflower',
    price:130,
},

{
    id:7,
    image:'images/orange.jpg',
    title:'Orange ',
    price:150,
},
{
    id:8,
    image:'images/fruits.jpg',
    title:'Fruits ',
    price:320,
},
{
    id:9,
    image:'images/papaya.jpg',
    title:'Papaya ',
    price:320,
}

];

const categories = [...new Set(product.map((item)=>
    
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>{
        var {image, title, price}= item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>

             <div class='bottom'>
                <p>${title}</p>
                <h2>₹  ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
             `</div>
             </div>`
        )
    }).join('')


var cart=[];
  
function addtocart(a)
{
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a)
{
    cart.splice(a,1);
    displaycart()
}
function displaycart(a){

   let j=0 ,total=0;
   document.getElementById("count").innerHTML=cart.length;

   if(cart.length==0)
   {
        document.getElementById('cartItem').innerHTML="Your Cart is Emty No Add To Carts";
        document.getElementById("total").innerHTML="₹"+0+".00"
   }
   else
   {
        document.getElementById("cartItem").innerHTML=cart.map((item)=>
        {
            var {image, title ,price} = item;
            total=total+price;
            document.getElementById("total").innerHTML="₹"+total+".00";
            return(
                `<div class='cart-item'>
                 <div class='row-img'>
                     <img class='rowing' src=${image}>
                 </div>
                 <p style='font-size:12px;'>${title}</p>
                 <h2 style='font-size:15px;'>₹ ${price}.00</h2>`+
                 "<i class='fa fa-trash-o' onclick='delElement("+(j++)+")'></i></div>"
            )
        }).join('');
   }

  }



document.querySelector("#menus").onclick = function()
{
    document.querySelector(".sidebar ").classList.toggle("hide")
}