import "../styles/Button.css";
const ReadMoreMinibtn = (props) => {
  return (
    <a class="readmore__btn   btn-sm " href="#">
      {props.title}
    </a>
  );
};

export default ReadMoreMinibtn;
