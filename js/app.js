function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username)
    var data = JSON.parse(user);
    if(user==null){
        alert("vui long nhap dung username hoac password")
    }
    else if(username==data.username && email == data.email && password==data.password){
        alert("dang nhap thanh cong")
        window.location.href="/src/demo.html"
    }
    else{
        alert("dang nhap that bai")
    }
}