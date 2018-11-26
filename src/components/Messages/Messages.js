import React, { Component } from "react";
import io from "socket.io-client";
const socketUrl = "http://localhost:3100";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      user: null
    };
  }

  initSocket = () => {
    const socket = io(socketUrl);
    socket.on("connect", () => {
      console.log("Socket Connected");
    });
    this.setState({ socket });
  };
  setUser = user => {
    const socket = this.state;
    // socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };
  logout = () => {
    const { socket } = this.state;
    // socket.emit(LOGOUT);
    this.setState({ user: null });
  };
  componentDidMount() {
    this.initSocket();
  }
  render() {
    return <div className="messagesContainer" />;
  }
}

export default Messages;
