import React from "react";

export const Card = ({ message }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://londonfilmandcomiccon.com/wp-content/uploads/2023/03/ChuckNorrisWeb.png" alt="Chuck Norris" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Fact about Chuck Norris</div>
          <p className="text-gray-700 text-base">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
