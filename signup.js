let email=document.getElementById("email");
    let password=document.getElementById("pass");
    let cpass=document.getElementById("cpass");
    let formdata=document.getElementById("signup");
    let data= JSON.parse(localStorage.getItem("loginDetails")) || [];
    formdata.addEventListener("submit",(e)=>{
      e.preventDefault();
      if(data.length!==0){
        for (let i=0;i<data.length;i++){
          if(data[i].Email==email.value){
            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
              },
              buttonsStyling: false
            })
            
            swalWithBootstrapButtons.fire({
              title: 'Account already exist',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'OK',
              reverseButtons: true
            }).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Hove a nice day'
                )
              } else if (
                /* Read more about handling dismissals below */
               
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  
                  'Cancelled',
                  
                )
              }
            })
          }
        }
      }
      else if(password.value===cpass.value){
        let obj={
        Email:email.value,
        Password:pass.value,
      }
      data.push(obj);
      localStorage.setItem("loginDetails",JSON.stringify(data))
     
    }else{
      alert("Password dose not match")
    }
     
    });