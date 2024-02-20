//GET Method
async function getMessages() {
  const query = await fetch(`http://localhost:8080/messages`);
  console.log(query);
  const data = await query.json();
  return data;
}

const btnMessages = document.getElementById("btn-messages");
console.log(btnMessages);

let mensajesPendientes = [];

btnMessages.addEventListener("click", async () => {
  const messages = await getMessages();
  messages.forEach((carta) => {
    if (carta.to === "Monk") {
      mensajesPendientes.push(carta);
    }
  });

  if (mensajesPendientes.length === 0) {
    console.log("No tienes mensajes pendientes");
  } else {
    console.log(mensajesPendientes);
  }
});

//POST Method
async function sendMessage() {
  const box = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      from: "Tú",
      to: "mi",
      message: "Te mando un mensaje",
    }),
  };

  fetch("http://localhost:8080/messages", box);
}

const btnSendMessages = document.getElementById("btn-send");
console.log(btnSendMessages);

btnSendMessages.addEventListener("click", async () => {
  const messages = await sendMessage();
});
