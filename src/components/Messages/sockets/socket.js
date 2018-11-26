const uuidv4 = require("uuid/v4");

const createUser = ({ name = "", socketId = null } = {}) => ({
  id: uuidv4(),
  name,
  socketId
});

const createMessage = ({ message, sender }) => {
  return {
    id: uuidv4(),
    time: getTime(new Date(Date.now())),
    message: message,
    sender: sender
  };
};

//Creates a Chat object

const createChat = ({
  messages = [],
  name = "Geauxfur Chat",
  users = []
} = {}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: [],

  addMessage: (messages, message) => {
    return [...messages, message];
  },
  addTypingUser: (typingUsers, username) => {
    return [...typingUsers, username];
  },
  removeTypingUser: (typingUsers, username) => {
    return typingUsers.filter(u => u === username);
  }
});

const getTime = date => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

module.exports = {
  createChat,
  createMessage,
  createUser
};
