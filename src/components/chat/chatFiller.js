import "./css/chatFiller.css";
import chatFiller from "../../assets/chatFiller.jpg";

function ChatFiller() {
  return (
    <div className="chat-filler-wrapper">
      <img src={chatFiller} className="filler-image" />
    </div>
  );
}

export default ChatFiller;
