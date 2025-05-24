










let ticketdiv = document.getElementById("ticketdiv");
let bookbtn = document.getElementById("bookbtn");
let token = 1;

bookbtn.addEventListener("click",MyFunction );



function MyFunction() {
  let from = document.getElementById("from");
  let select1 = from.options[from.selectedIndex].value;

  let to = document.getElementById("to");
  let select2 = to.options[to.selectedIndex].value;

  let name = document.getElementById("name").value.trim();
  let number = document.getElementById("number").value.trim();

  let gender = document.getElementById("gender");
  let select3 = gender.options[gender.selectedIndex].value;

  let age = document.getElementById("age").value.trim();
  let ticket = parseInt(document.getElementById("ticket").value);

  // Validate form inputs
  if (
    select1 === "from" || 
    select2 === "to" || 
    name === "" || 
    number === "" || 
    isNaN(ticket) || 
    ticket <= 0
  ) {
    return alert("Please fill in all required details");
  }

  let amount = 0;

  // Route fare logic
  if (select1 === "ramanathapuram" && select2 === "karaikudi") amount = 100 * ticket;
  else if (select1 === "ramanathapuram" && select2 === "trichy") amount = 200 * ticket;
  else if (select1 === "ramanathapuram" && select2 === "vilupuram") amount = 300 * ticket;
  else if (select1 === "ramanathapuram" && select2 === "chennai") amount = 400 * ticket;
  else if (select1 === "karaikudi" && select2 === "trichy") amount = 100 * ticket;
  else if (select1 === "karaikudi" && select2 === "vilupuram") amount = 200 * ticket;
  else if (select1 === "karaikudi" && select2 === "chennai") amount = 300 * ticket;
  else if (select1 === "trichy" && select2 === "vilupuram") amount = 100 * ticket;
  else if (select1 === "trichy" && select2 === "chennai") amount = 200 * ticket;
  else if (select1 === "vilupuram" && select2 === "chennai") amount = 100 * ticket;
  else {
    alert("Choose another bus route");
    return;
  }

  // Decrement token only after successful booking
  token--;

  // Create the main container for ticket info
  let maindiv = document.createElement("div");
  maindiv.id = "maindiv";
  ticketdiv.appendChild(maindiv);
  ticketdiv.style.minHeight = "100vh";

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

  // Ticket details
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

  for (let i = 0; i < details.length; i++) {
    let li = document.createElement("li");
    li.className = "detail";
    li.textContent = details[i];
    ul.appendChild(li);
  }

  // Subdivtwo for QR and message
  let subdivtwo = document.createElement("div");
  subdivtwo.className = "subdivtwo";
  subdiv.appendChild(subdivtwo);

  // QR Code
  let img = document.createElement("img");
  img.className = "image";
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(name)}`;
  subdivtwo.appendChild(img);

  // Thank you message
  let msg = document.createElement("h3");
  msg.className = "msg";
  msg.textContent = "Thank you for booking with us. Have a safe and enjoyable trip!";
  maindiv.appendChild(msg);
}


function ticketfun() {
  let navtick = parseInt(document.getElementById("navtick").value);
  if (navtick === token) {
    MyFunction();
  } else {
    alert("Not allowed");
  }
}