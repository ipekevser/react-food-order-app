import { useContext } from "react";

import FilterContext from "../../store/filter-context";

const Filter = () => {
  /*  const [enteredValue, setEnteredValue] = useState("0");

  const valueChangeHandler = (event) => {
    console.log("event.target.value", event.target.value);
    setEnteredValue(event.target.value);
  }; */

  const filterCtx = useContext(FilterContext);

  const valueChangeHandler = (event) => {
    filterCtx.changedEnteredValue(event.target.value);
  };

  return (
    <div className="position-relative p-4 mt-4" >
      <div className="w-50 d-flex bd-highlight position-absolute top-50 start-50 translate-middle">
        <select
          className="form-select form-select-sm fs-6 rounded-pill w-100 bd-highlight "
          aria-label=".form-select-sm example"
          onChange={valueChangeHandler}
          value={filterCtx.enteredValue}
        >
          <option value="All">Categories</option>
          <option value="Fish">Fish</option>
          <option value="Chicken">Chicken</option>
          <option value="Burger">Burger</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
