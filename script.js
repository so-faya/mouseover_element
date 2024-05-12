const myboxnode= document.querySelector(".mybox");
const mybuttonnode = document.getElementById("mybutton")
// console.log(myboxnode)
 function changeColor(event){
    myboxnode.style.backgroundColor = "yellow";
    myboxnode.textContent= "Don't do it😟";
 }
mybuttonnode.addEventListener("mouseover", changeColor);

mybuttonnode.addEventListener("mouseout", event => {
   myboxnode.style.backgroundColor = "aqua"
   myboxnode.textContent = "Click me🙂";
})

mybuttonnode.addEventListener("click", function(event){
   myboxnode.style.backgroundColor = "red"
   myboxnode.textContent = "OUCH!😱"
})