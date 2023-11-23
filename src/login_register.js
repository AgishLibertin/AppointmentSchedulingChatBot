function Ulogin(){
    var luser = document.getElementById('userlogin').value;
    var lpass = document.getElementById('passlogin').value;

    if((localStorage.getItem('E-mail') == luser) && (localStorage.getItem('RegisterPassword')==lpass)){
        window.location.href="bot.html"
    }
    else{
        alert('Username or Password Wrong');
    }

    return false;
}


function Register(){

    var Email= document.getElementById('mail').value;
    var regpass = document.getElementById('pass').value;
    var repass = document.getElementById('rpass').value;
    var mailid = /[a-z0-9.-_]{3,}[@][a-z]{4,}[.][.a-z]{3,}/;
    var password = /[a-zA-Z0-9.-_@&$]{8,16}/;

    localStorage.setItem('E-mail',Email);
    localStorage.setItem('RegisterPassword',regpass);

    if(mailid.test(Email)){
        if(password.test(regpass)){
            if(regpass==repass){
                alert('Registration Successful')
                x.style.left='50px';
                y.style.left='450px';
                z.style.left='0px';
            }
            else{
                alert('Password does not match');
            }
        }
        else{
            alert('Invalid Password');
        }
    }
    else{
        alert('Invalid Credentials');
    }

    return false;
}


var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function signup()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}