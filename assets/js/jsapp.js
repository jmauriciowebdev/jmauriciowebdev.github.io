const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const gene = document.querySelectorAll(".colorsaver");
const genetxt = document.querySelectorAll(".colorsavertext");
const btn = document.getElementById("generatehex");
const valueInput = document.getElementById("valueInput");
var hexColor = "#" + valueInput.value;


for (let i = 0; i < gene.length; i++){
    gene[i].addEventListener("click", function(){
        hexColor = "#" + valueInput.value;
        this.style.background = hexColor;
        genetxt[i].innerHTML = hexColor;
    });
};

btn.addEventListener("click",function randomhex(){
    hexColor = "#";
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexColor += hexNumbers[random];
    };
    document.querySelector(".buttonwrapper").style.background = hexColor;
    while(hexColor.charAt(0) === '#')
    {
        hexColor = hexColor.substr(1);
    }

    valueInput.value = hexColor;
});

