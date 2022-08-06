import { useState } from "react";

import FilterContext from "./filter-context";

const FilterProvider = (props) => {
    const [enteredValue, setEnteredValue] = useState("All");

    const filterValueChangeHandler = (data) => {
      console.log("event.target.value", data);
      setEnteredValue(data);
    };
  
    const filterContext = {
      enteredValue,
      changedEnteredValue: filterValueChangeHandler,
    };
    return (
      <FilterContext.Provider value={filterContext}>
        {props.children}
      </FilterContext.Provider>
    );
  };


export default FilterProvider;
