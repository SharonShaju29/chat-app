import user from "../../assets/user.avif";
import "./css/chatCard.css";
import { Badge } from "antd";

function ChatCard(props) {
  const timeFormatter = (time) => {
    const temp = time.split(",");
    const hourMinutes = temp[1].split(":");
    return `${hourMinutes[0]}:${hourMinutes[1]}`;
  };

  return (
    <div className="chat-card-wrapper" onClick={props.onClick}>
      <img src={user} className="image-design" alt="" />
      <div>
        <h4 className="card-name-font">{props.name}</h4>
        <span className="span-message">{props.lastMessage}</span>
      </div>
      <div className="card-time-badge-wrapper">
        <div>{timeFormatter(props.time)}</div>
        <Badge
          count={props.unseen > 1 ? props.unseen : ""}
          className="badge-style"
          color="blue"
        />
      </div>
    </div>
  );
}

export default ChatCard;
