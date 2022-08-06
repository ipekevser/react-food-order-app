import React from "react";

const FilterContext = React.createContext({
  enteredValue: '',
  changedEnteredValue: (item) => {},
});

export default FilterContext;