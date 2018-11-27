import React, { Component } from "react";
import { connect } from "react-redux";
import { updateInput } from "../../redux/mainReducer";
import io from "socket.io-client";
import "./Messages.css";
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
    const { userInfo } = this.props.main;
    if (e.keyCode == 13 && body) {
      console.log(userInfo);
      const message = {
        body,
        from: userInfo.image_url
      };
      this.setState({ messages: [message, ...this.state.messages] });
      this.socket.emit("message", userInfo.image_url, body);
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
        <li className="chats" key={index}>
          <img src={message.from} alt="user profile image" /> {message.body}
        </li>
      );
    });
    return (
      <div className="messagesContainer">
        <div className="messagesDisplay">{displayMessages}</div>
        <input
          className="messageInput"
          type="text"
          placeholder="Enter a message..."
          onKeyUp={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { updateInput }
)(Messages);
