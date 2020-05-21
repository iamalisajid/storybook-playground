import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import MovieListItem from "../MovieListItem";

export default {
  title: "MovieList Item",
  component: MovieListItem,
  decorators: [
    (storyFn) => (
      <div>
        <div style={{ backgroundColor: "lightblue" }}>Above</div>
        {storyFn()}
        <div style={{ backgroundColor: "lightblue" }}>Below</div>
      </div>
    ),
    withKnobs
  ],
};

const pulpFiction = {
  id: 680,
  title: "Pulp Fiction",
  vote_average: 8.4,
  backdrop_path: "/4XzbcAKdX4n3aWfzBjjeAlm68S3.jpg",
  overview:
    "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
  release_date: "1994-09-10",
};

export const defaultMovieListItem = () => <MovieListItem {...pulpFiction} />;
export const noImage = () => (
  <MovieListItem {...pulpFiction} backdrop_path="" />
);
export const learnMoreAction = () => (
  <MovieListItem {...pulpFiction} onLearnMore={action("Learn more")} />
);

export const withKnobAddOn = () => {
  const title = text("Title:", pulpFiction.title);
  const overview = text("Overview:", pulpFiction.overview);
  const backdrop_path = text("Image:", pulpFiction.backdrop_path);

  return (
    <MovieListItem
      title={title}
      overview={overview}
      backdrop_path={backdrop_path}
      onLearnMore={action("Learn more")}
    />
  );
};

export const asDynamicVariables = () => {
    const name = text("Name", "James");
    const age = number("Age", 35);
    const content = `I am ${name} and I'm ${age} years old.`;
  
    return <div>{content}</div>;
  };