import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Filter from "../Filter/Filter";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Filter />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
