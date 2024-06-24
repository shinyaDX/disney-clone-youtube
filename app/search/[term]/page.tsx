import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  // API call to get the search Movies
  // API call to get the Popular Movies
  return <div>Welcome to the search page: {termToUse}</div>;
}

export default SearchPage;
