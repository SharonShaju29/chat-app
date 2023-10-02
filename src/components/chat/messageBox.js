import "./css/messageBox.css";
import { Input } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatNewMessage } from "../../store/chat/actions";

function MessageBox() {
  const [message, setMessage] = useState();
  const state = useSelector((state) => state.chat.currentChat);
  const dispatch = useDispatch();

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter = () => {
    dispatch(
      chatNewMessage({
        user: state.user,
        contact: state.contact,
        message: message,
      })
    );
   setMessage('');
  }

  const createMessageHanlder = () => {
    dispatch(
      chatNewMessage({
        user: state.user,
        contact: state.contact,
        message: message,
      })
    );
    setMessage('');
  };

  return (
    <div className="message-box-wrapper" >
      <Input
        placeholder="Type your message here..."
        value={message}
        onChange={handleMessage}
        className="message-box-input"
        onPressEnter={handleEnter}
      />
      <SendOutlined
        className="message-send-icon"
        onClick={createMessageHanlder}
      />
    </div>
  );
}

export default MessageBox;
