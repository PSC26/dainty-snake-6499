let email=document.getElementById("email");
    let password=document.getElementById("pass");
    let formdata=document.getElementById("signup");
    let data= JSON.parse(localStorage.getItem("loginDetails"))|| [];
    formdata.addEventListener("submit",(e)=>{
      e.preventDefault();
      display(data);
    });
    function display(Data){
      if(Data[0]===undefined){
          alert(email.value+" "+"Does not exist please create an account")
          window.location.href="./signup.html"
        }else{
          Data.forEach(element => {
         if(email.value===element.Email && password.value===element.Password){
         
          setTimeout(()=>{
            window.location.href="./index.html"
          },2000)
          const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

    Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
})
        }
        else{
          // alert("Incorrect Email or Password")
          const Toast = Swal.mixin({
  toast: true,
  position: 'top-center',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'error',
  title: 'Incorrect Email or Password'
})
        }
      });
    }
     
    }