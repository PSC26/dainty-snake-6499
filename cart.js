let cart=JSON.parse(localStorage.getItem("cart"))//<-----
    let cont=document.getElementById("mobile")
    function displayproduct(data){
      let total=document.getElementById("cart-total")
      cont.innerHTML="";
        cart.forEach(( product )=>{//<----
        let card=document.createElement("div");
        let image=document.createElement("img");
        let name=document.createElement("h3");
        let company=document.createElement("p");
        let quantity=document.createElement("span");//<------
        let price=document.createElement("h4");
        let buy=document.createElement("button");
        let remove=document.createElement("button");//<------
        let increment=document.createElement("button");//<------
        let decrement=document.createElement("button");//<------
        
        quantity.textContent=product.quantity;//<------
        buy.textContent="Buy Now"
        remove.textContent="Remove";//<------
        increment.textContent="+";//<------
        decrement.textContent="-";//<------
        image.src=product.img;
        company.textContent=product.company
        name.textContent=product.name;
        price.textContent=`₹${product.price}`;
       

        //add to cart increment , decrement remove
        buy.addEventListener("click",()=>{
          Swal.fire({
            title: 'Thank you for Placing Order',
            
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          cart=cart.filter((el)=>{
            return el.id!==product.id
            
          })
          localStorage.setItem("cart",JSON.stringify(cart))
          displayproduct();
        })
        remove.addEventListener("click",()=>{
          Swal.fire({
            title: 'Do you want to remove from Cart',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            cart=cart.filter((el)=>{
              return el.id!==product.id
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            displayproduct();
        })
            if (result.isConfirmed) {
              Swal.fire('Removed!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Your Order Canceled', '', 'info')
            }
          })
            
        increment.addEventListener("click",()=>{
          product=product.quantity++;
          localStorage.setItem("cart",JSON.stringify(cart))
          displayproduct();
        })
        decrement.addEventListener("click",()=>{
          if(product.quantity>1){
            product=product.quantity--;
            localStorage.setItem("cart",JSON.stringify(cart))
            displayproduct();
          }
        })
          
        //put into main container
        card.append(image,name,price,company,increment,quantity,decrement,remove,buy);
        cont.append(card)
      })
      let sum=0;
      for (let i=0;i<cart.length;i++){
        sum+=cart[i].price*cart[i].quantity
      }
      total.textContent=sum;
    }
    displayproduct();