const Button1 = ({ color, title, onShow }) => {

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onShow}
      >
        {title}
      </button>
    </div>
  );
};

export default Button1;
