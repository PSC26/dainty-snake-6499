async function fetchdata(){
    try{
      let api=await fetch("https://63c63fa74ebaa802854206df.mockapi.io/mobile")
          api=await api.json();
          console.log(api)
          filterdata(api)
          
    }catch(error){
      console.log(error)
    }
    
  }
  fetchdata();

  let filterby=document.getElementById("filter");
      filterby.addEventListener("change",()=>{
        fetchdata()
      })
  function filterdata(data){
    let filterValue=filterby.value
      if(filterValue===""){
        displayproduct(data)
      }else{
        data=data.filter((product)=>{
          return product.company==filterValue
        })
        displayproduct(data)
      }

  }

  let cont=document.getElementById("mobile")
  let cartArr=JSON.parse(localStorage.getItem("cart"))||[];
//dispaly data on browser
  function displayproduct(data){
    cont.innerHTML=""
    data.forEach(( product )=>{
      let card=document.createElement("div");
      let image=document.createElement("img");
      let name=document.createElement("h3");
      let price=document.createElement("h4");
      let company=document.createElement("p");
      let addcard=document.createElement("button");

      addcard.textContent="Add To Card";
      image.src=product.img;
      name.textContent=product.name;
      price.textContent=`Price:- ₹${product.price}`;
      company.textContent=`Brand:-${product.company}`;

      //add to cart
      addcard.addEventListener("click",()=>{
        if(checkduplicate(product)){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Already Added Try Another one',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }else{
          
          cartArr.push({...product,quantity:1})
          localStorage.setItem("cart",JSON.stringify(cartArr))
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added to cart',
            showConfirmButton: false,
            timer: 0
          })

        }

      })
 
      card.append(image,name,price,company,addcard);
      cont.append(card)
    })
  }
  
  function checkduplicate(product){
    for(let i=0;i<cartArr.length;i++){
      if(cartArr[i].id===product.id){
        return true;
      }
    }
    return false;
  }