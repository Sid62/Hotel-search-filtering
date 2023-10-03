import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        
        <div className="recommended-flex">
          
          <Button onClickHandler={handleClick} value="Nike" title="New York" />
          <Button onClickHandler={handleClick} value="Adidas" title="Mumbai" />
          <Button onClickHandler={handleClick} value="Puma" title="Peris" />
          <Button onClickHandler={handleClick} value="Vans" title="London" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
