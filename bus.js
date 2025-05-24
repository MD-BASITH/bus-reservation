let ticketdiv = document.getElementById("ticketdiv");
 
 
 


 let bookbtn=document.getElementById("bookbtn")
 console.log(bookbtn)


 let token=1;




 bookbtn.addEventListener("click", MyFuction);
    function MyFuction(){


       let navtick=document.getElementById("navtick").value
 console.log(navtick)

let from=document.getElementById("from")
// let val=from.value
let select1=from.options[from.selectedIndex].value
console.log(select1)

let to=document.getElementById("to")
// let val1=to.value
let select2=to.options[to.selectedIndex].value
console.log(select2)


 let name=document.getElementById("name").value
 let number=document.getElementById("number").value
 
let gender=document.getElementById("gender")
// let val3=from.value
let select3=gender.options[gender.selectedIndex].value
console.log(select3)


 let age=document.getElementById("age").value
 let ticket=document.getElementById("ticket").value


  let amount=0
  token--

      if (select1 === "from" || select2 === "to" || name === "" || number === "" || isNaN(ticket)) {
    return alert("Please fill in all required details");
    
  }

      // ramanathapuram
 else if(select1==="ramanathapuram" && select2==="karaikudi"){
    amount=100*ticket
     }
  else if(select1==="ramanathapuram" && select2==="trichy"){
    amount=200*ticket
     }
  else if(select1==="ramanathapuram"  && select2==="vilupuram"){
   amount=300*ticket
     }
  else if(select1==="ramanathapuram" && select2==="chennai"){
   amount=400*ticket
   }
  
    // karaikudi

 else if(select1==="karaikudi" && select2==="trichy"){
     amount=100*ticket
   }
 else if(select1==="karaikudi" && select2==="vilupuram"){
     amount=200*ticket
   }
  else if(select1==="karaikudi" && select2==="chennai"){
   amount=300*ticket
   }
   

  //  trichy
 

 else if(select1==="trichy" && select2==="vilupuram"){
     amount=100*ticket
    }  
 else if(select1==="trichy" &&select2==="chennai"){
     amount=200*ticket
   }
   
//  vilupuram

else if(select1==="vilupuram" && select2==="chennai"){
     amount=100*ticket
   
   }
   
else{
   alert("choose a another bus")
 }
    




  // Create the main container for ticket info
let maindiv = document.createElement("div");
maindiv.id = "maindiv";
ticketdiv.appendChild(maindiv);
ticketdiv.style.minHeight="100vh"

// Heading for the ticket
let resh1one = document.createElement("h1");
resh1one.className = "resh1one";
resh1one.textContent = "BOOKED TICKET";
maindiv.appendChild(resh1one);

// Subdiv for content
let subdiv = document.createElement("div");
subdiv.className = "subdiv";
maindiv.appendChild(subdiv);

// Subdivone for list structure
let subdivone = document.createElement("div");
subdivone.className = "subdivone";
subdiv.appendChild(subdivone);

// Create unordered list
let ul = document.createElement("ul");
subdivone.appendChild(ul);

// Ticket details (assumes select1, select2, name, number, select3, age, ticket, amount are already defined)
let details = [
  `From: ${select1}`,
  `To: ${select2}`,
  `Name: ${name}`,
  `Number: ${number}`,
  `Gender: ${select3}`,
  `Age: ${age}`,
  `Ticket: ${ticket}`,
  `Total Amount: ₹${amount}`
];

// Create and append list items
for (let i = 0; i < details.length; i++) {
  let li = document.createElement("li");
  li.className = "detail";
  li.textContent = details[i];
  ul.appendChild(li);
}




    let subdivtwo=document.createElement("div")
    subdivtwo.className="subdivtwo"
    subdiv.appendChild(subdivtwo)

  let img=document.createElement("img")
  img.className="image"
  subdivtwo.appendChild(img)

  img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" +name


  let msg=document.createElement("h3")
  msg.className="msg"
  msg.textContent="Thank you for booking with us. Have a safe and enjoyable trip!"
  maindiv.appendChild(msg)


 }

 function ticketfun(){
 if(parseInt(navtick)===token){
  Myfuction()
}
   else{
      alert("not allowed")
 }

 }













//   