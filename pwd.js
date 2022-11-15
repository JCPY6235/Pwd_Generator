/*let Data = [
    {
        pseudo: "Denis",
        age: 33,
        Technos: ['JavaScript', 'React', 'NodeJs'],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        Technos: ['CSS', 'BootStrap', 'TypeScript'],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        Technos: ['Php', 'React', 'Python'],
        admin: true,
    },
    {
        pseudo: "John",
        age: 23,
        Technos: ['JavaScript', 'React', 'Angular'],
        admin: true,
    }
]

function Filter(am){

document.body.innerHTML += Data
.filter((user)=> user.pseudo.includes(String(am)))
.sort((a,b)=> a.age - b.age)
.map((data)=>`
<div class = "user-card">
<h2>${data.pseudo}</h2>
<p>Age:${data.age} ans</p>
<p>Status: ${data.admin ? "Modérateur":"Membre"}</p>
</div>
`)
.join('');
}
ipt =document.getElementById('ipt').nodeValue;
Filter(ipt);
*/


let range = document.getElementById('pwd-length');
let shower = document.getElementById('length-shower');

range.addEventListener('input', (e)=>{
    shower.value = e.target.value
})

const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù%!:&£µ@ç\"";
let disPlay = document.getElementById('display')

function generatePwd() {
    let data = [];
    let Password = [];

    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);


    if (data.length === 0) {
        alert('Please! Let select the criteria.')
    }
    else{

        for (let i = 0; i < range.value; i++) {
            
            Password.push(data[Math.floor(Math
                .random()*data.length)]);
                
            }
            console.log(Password.join(''));
        }
    disPlay.value = Password.join('');
    disPlay.select();
    document.execCommand("copy");
    generateButton.textContent = "Copied!";
    setTimeout(()=>{
        generateButton
        .textContent = "Let Generate the Password";
    },1000);
}


generateButton.addEventListener('click', generatePwd);