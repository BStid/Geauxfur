import React, { Component } from "react";
import io from "socket.io-client";
const socketUrl = "http://localhost:3100";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null,
      messages: []
    };
  }

  initSocket = () => {
    this.socket = io(socketUrl);
    this.socket.on("message", message => {
      this.setState({ messages: [message, ...this.state.messages] });
    });
  };

  handleSubmit = e => {
    const body = e.target.value;
    if (e.keyCode == 13 && body) {
      const message = {
        body,
        from: "Me"
      };
      this.setState({ messages: [message, ...this.state.messages] });
      this.socket.emit("message", body);
      e.target.value = "";
    }
  };

  componentDidMount() {
    this.initSocket();
  }
  render() {
    const { messages } = this.state;
    const displayMessages = messages.map((message, index) => {
      return (
        <li key={index}>
          <b>{message.from}</b> {message.body}
        </li>
      );
    });
    return (
      <div className="messagesContainer">
        <input
          className="messageInput"
          type="text"
          placeholder="Enter a message..."
          onKeyUp={this.handleSubmit}
        />
        <button onClick={this.initSocket}>Click Me</button>
        {displayMessages}
      </div>
    );
  }
}

export default Messages;
