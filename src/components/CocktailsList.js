import React from "react";

import Cocktail from "./Cocktail";
export default function CocktailsList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">there are no cocktails to display</h2>;
  }
  return (
    <section className="sec">
      <h2 className="section-title">coctails</h2>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
