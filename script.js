
const btn = document.getElementById("toggle-btn");
const theme = document.querySelector("#theme-change");
const mainText = document.getElementById("maintext");
let num = 0;
let themeStore = '';
getData();

let setAlready = getData();
theme.href = `${setAlready}.css`;

btn.addEventListener("click", () => {
    if(num === 0){
        theme.href = "dark.css";
        themeStore = "dark";
        mainText.style.color = "white";
        num = 1;
        storeData(themeStore);

    }
    else if(num === 1) {
        theme.href = "light.css";
        themeStore = "light";
        mainText.style.color = "black";
        num = 0;
        storeData(themeStore);
    }
})

function storeData(themename){
    localStorage.setItem('theme', themename);
}

function getData(){
    let storedThemeName = localStorage.getItem('theme');
    return storedThemeName;
}




