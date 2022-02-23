export const chatBox = document.getElementById("chatbox");
export const activeUserList = document.getElementById("userlist");

export function createChatContainer(data, user) {
  const chatContainer = document.createElement(`div`);
  chatContainer.classList.add(...data.container);
  chatContainer.innerHTML = `<img src="${data.imgsrc}" alt="Avatar" class="${data.imgclass}" height="25rem" width="5rem"/>
    <p>${data.message}</p>
    <span class="${data.timeclass}">${user} @ ${data.time}</span>`;
  chatBox.appendChild(chatContainer);
  chatContainer.scrollIntoView();
}

export const dataleft = (data) => {
  return {
    container: "container left".split(" "),
    imgsrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png",
    imgclass: "right",
    message: data,
    timeclass: "time-left",
    time: new Date().toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }),
  };
};

export const dataright = (data) => {
  return {
    container: "container right".split(" "),
    imgsrc:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png",
    imgclass: "left",
    message: data,
    timeclass: "time-right",
    time: new Date().toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    }),
  };
};

export function addUser(user) {
  const item = document.createElement("li");
  item.innerHTML = `<a href="#">${user.name.split("_")[0]}</a>`;
  item.id = user.id;
  activeUserList.appendChild(item);
}

export function clearActiveUser(user) {
  const userli = document.getElementById(user.id);
  userli.remove();
}

// setInterval(() => {
//   const user = { name: "Ramu", id: "alpha" };
//   createChatContainer(dataleft("Random"), user);
//   addUser(user);
// }, 5003);
// setInterval(() => {
//   const user = { name: "Shyamu", id: "beta" };
//   createChatContainer(dataright("Random"), user);
//   addUser(user);
// }, 7829);
