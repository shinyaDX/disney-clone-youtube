import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      Welcome to the genre with ID: {id} and name: {genre}
    </div>
  );
}

// http://localhost:3000/genre/80?genre=Crime
export default GenrePage;
