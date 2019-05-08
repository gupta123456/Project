
var inp=document.getElementById('mes');
var btn=document.getElementById('btn');
var user = document.getElementById('user');
var users = [];
(function()
{
    users=JSON.parse(localStorage.getItem('tasks'));
    users.forEach(items)
    {
        display(items)
    }
        
})
btn.addEventListener('click',dis);
function dis()
{
    var val=inp.value;
    var name = prompt('Enter your name');
    var socket = io();
   
    socket.emit('message', {name: name, m:val});
    socket.on('nameUser', (data)=>
    {
        users.push({name:data.d.name,m:data.d.m});
        localStorage.setItem(JSON.stringify(users));
        display(data.d);
        console.log(users);
    })
}

function display(d) {
    var p = document.createElement('p');
    var text = document.createTextNode(`${d.name} : `);
    var text1 = document.createTextNode(d.m);

    p.append(text);
    p.append(text1);
    user.append(p);
} 