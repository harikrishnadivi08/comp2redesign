var objPeople = [
    {
        username: "humber",
        password: "humber01"
    },
    {
        username: "hari",
        password: "hari01"
    },
    {
        username: "rocco",
        password: "rocco01"
    },
]
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

for (i=0; i < objPeople.length; i++) {
if (username == objPeople[i].username && password == objPeople[i].password)
    {
    console.log(username +"is logged in."); 
    return;
    }
}
console.log("incorrect username or password");
}
