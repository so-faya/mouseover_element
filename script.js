const myboxnode= document.querySelector(".mybox");
const mybuttonnode = document.getElementById("mybutton")
// console.log(myboxnode)
 function changeColor(event){
   setTimeout(function(){
      myboxnode.style.backgroundColor = "yellow";
      myboxnode.textContent= "Don't do it😟";

   }, 250) 
 }
mybuttonnode.addEventListener("mouseover", changeColor);

mybuttonnode.addEventListener("mouseout", event => {
   setTimeout(function(){
      myboxnode.style.backgroundColor = "aqua"
      myboxnode.textContent = "Click me🙂";
   },100)  
})

mybuttonnode.addEventListener("click", function(event){
   setTimeout(function(){
      myboxnode.style.backgroundColor = "red"
      myboxnode.textContent = "OUCH!😱"

   }, 250)
})

