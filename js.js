let inputs = document.querySelector("#inp");
let text = document.querySelector(".text");

function add() {
    if(inputs.value === '') {
        alert("Please Enter Task!");
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-xmark" style="color: #000000;"></i>`;
        text.appendChild(newEle);
        inputs.value='';
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove();
            
        }
    }
}
