import "../styles/Titletext.css";
const Titletext = (props) => {
  return (
    <div className="title___text___area">
      <div className="title___text">{props.title}</div>
    </div>
  );
};

export default Titletext;
