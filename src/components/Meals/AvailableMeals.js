import { useEffect, useState, useContext } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import FilterContext from "../../store/filter-context";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  // useeffect is not return a promise because of that we cant use async await in it
  // we use async await inside a useeffect with new function and this should have async await in it

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const filterCtx = useContext(FilterContext);

  console.log('test context',filterCtx.enteredValue);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-food-order-app-34e4d-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          category: responseData[key].category,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError} </p>
      </section>
    );
  }

  const filteredList = meals.filter(item => {
    if(filterCtx.enteredValue === 'All') {
      return meals
    }
    return item.category === filterCtx.enteredValue
  })

  const mealsList = filteredList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
