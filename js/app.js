// Messaging data & state
const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Theresa" },
  { id: 3, name: "Team" },
  { id: 4, name: "Tiffany" },
  { id: 5, name: "Emilie" },
];

const messages = {
  1: [
    { from: "Alex", text: "Hi there!" },
    { from: "Me", text: "Hello Alex!" },
  ],
  2: [{ from: "Team", text: "Hey! How are you?" }],
  3: [],
  4: [{ from: "Tiffany", text: "Hey! How are you doing?" }],
  5:  [{from: "Emilie", text: "Hey! How are you?" }],
}

let selectedUserId = users[0].id;

// DOM elements
const contactsEl = document.getElementById("contacts");
const messagesListEl = document.getElementById("messages-list");
const inputEl = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");

function renderContacts() {
  contactsEl.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.textContent = user.name;
    div.style.padding = "10px";
    div.style.cursor = "pointer";
    div.style.borderBottom = "1px solid #ddd";
    if (user.id === selectedUserId) div.style.backgroundColor = "#d0e7ff";
    div.onclick = () => {
      selectedUserId = user.id;
      renderContacts();
      renderMessages();
    };
    contactsEl.appendChild(div);
  });
}

function renderMessages() {
  messagesListEl.innerHTML = "";
  (messages[selectedUserId] || []).forEach((msg) => {
    const div = document.createElement("div");
    div.textContent = msg.text;
    div.style.marginBottom = "10px";
    div.style.maxWidth = "70%";
    div.style.padding = "10px";
    div.style.borderRadius = "8px";

    if (msg.from === "Me") {
      div.style.backgroundColor = "#007bff";
      div.style.color = "white";
      div.style.marginLeft = "auto";
      div.style.textAlign = "right";
    } else {
      div.style.backgroundColor = "#eee";
      div.style.textAlign = "left";
    }

    messagesListEl.appendChild(div);
  });
  messagesListEl.scrollTop = messagesListEl.scrollHeight;
}

function setupMessaging() {
  renderContacts();
  renderMessages();

  sendBtn.onclick = () => {
    const text = inputEl.value.trim();
    if (!text) return;

    messages[selectedUserId] = messages[selectedUserId] || [];
    messages[selectedUserId].push({ from: "Me", text });
    inputEl.value = "";
    renderMessages();
  };

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
}

// Initialize messaging once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  if (contactsEl && messagesListEl && inputEl && sendBtn) {
    setupMessaging();
  }
});
