import { Genres } from "@/typings";
import fetch, { RequestInit } from "node-fetch"; // Changed this line
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface ExtendedRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

interface ExtendedRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    console.error("TMDB_API_KEY is not set");
    return <div>Error: API key is not set</div>;
  }

  const options: ExtendedRequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error(
        `Network response was not ok: ${response.status} ${response.statusText}`
      );
      throw new Error(
        `Network response was not ok: ${response.status} ${response.statusText}`
      );
    }
    const data = (await response.json()) as Genres;

    // デバッグ用にdataオブジェクトをログ出力
    console.log("Fetched data:", data);

    // dataおよびdata.genresがundefinedでないことを確認
    if (!data || !data.genres) {
      console.error("Error: Genres not found in the fetched data");
      return <div>Error: Genres not found</div>;
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          Genre
          <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {data.genres.map((genre) => (
            <DropdownMenuItem key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } catch (error) {
    console.error("Error fetching genres:", error as Error);
    return <div>Error: {(error as Error).message}</div>;
  }
}

export default GenreDropdown;
