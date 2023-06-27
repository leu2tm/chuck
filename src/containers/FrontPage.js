import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke, getJoke } from "../store/ChuckSlice";
import Card from "../components/Card";

export const FrontPage = () => {
  const dispatch = useDispatch();

  const joke = useSelector(getJoke);

  useEffect(() => {
    dispatch(fetchJoke());
  }, [dispatch]);

  return (
    <section className="flex h-screen flex items-center justify-center">
      <figure>
        {joke.value ? <Card message={joke.value} /> : null}
        <figcaption className="mt-10">
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <Button onClick={() => dispatch(fetchJoke())} label="Generate new joke" />
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default FrontPage;
