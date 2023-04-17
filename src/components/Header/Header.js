import PropTypes from "prop-types";
import Button1 from "../Buttons/Button1";

const Header = ({ text, onShow, showAdd }) => {
  return (
    <header className="header">
      <h1>{text}</h1>
      <Button1
        color={showAdd ? "Red" : "Green"}
        title={showAdd ? "Close" : "Add"}
        onShow={onShow}
      />
    </header>
  );
};

Header.defaultProps = {
  text: "React Go",
};

Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
