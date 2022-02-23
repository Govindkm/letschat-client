import * as client from "./client.js";

const socket = io("https://letschat-scoketio.herokuapp.com");

const name = prompt("Enter Your Name ");
socket.emit("new-user-joined", name);

socket.on("user-joined", (user) => {
  console.log(user);
  client.addUser(user);
  client.createChatContainer(
    client.dataright(`${user.name.split("_")[0]} joined the chat.`),
    user.name
  );
});

socket.on("active-users", (users) => {
  console.log(users);
  for (let key in users) {
    client.addUser({ id: key, name: users[key] });
  }
});

socket.on("Disconnected", (user) => {
  console.log(user);
  client.clearActiveUser(user);
  client.createChatContainer(
    client.dataright(`${user.name.split("_")[0]} left the chat.`),
    user.name
  );
});

socket.on("recieve", (data) => {
  client.createChatContainer(client.dataright(data.message), data.user);
});

const broadCast = (e) => {
  client.createChatContainer(client.dataleft(e), "me");
  socket.emit("message", e);
};

document.getElementById("userform").addEventListener("submit", (e) => {
  e.preventDefault();
  broadCast(e.target[0].value);
  e.target[0].value = "";
});
