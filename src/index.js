let name2 = prompt ("Whats your name");
let age = prompt ("How old are you?");
let email = prompt ("Email address");

if (age==18){
    alert(`Hi ${name2},you are ${age} years old and we will keep in touch via your email ${email}`);
}
else{
    alert(`Sorry ${name2},you are ${age} years old and so are not qualified`)
}