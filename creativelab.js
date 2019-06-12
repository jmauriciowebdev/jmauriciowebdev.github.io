const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const gene = document.querySelectorAll(".generated")
const genetxt = document.querySelectorAll(".generatedtxt")
var hexColor = "#fefefe";

for (let i = 0; i < gene.length; i++){
    gene[i].addEventListener("click", function(){
        this.style.background = hexColor;
        genetxt[i].innerHTML = hexColor;
    });
};

document.querySelector("#btn").addEventListener("click",function randomhex(){
    hexColor = "#";
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexColor += hexNumbers[random];
    };
    document.querySelector("#dive").style.background = hexColor;
});