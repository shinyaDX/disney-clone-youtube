import { Button } from "@/components/ui/button";
import Image from "next/image";
import MoviesCarousel from "@/components/ui/MoviesCarousel";
import { getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="">
      <h1 className="">lets build Disney</h1>

      {/* CarouselBannerWrapper */}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />

        {/* <MoviesCarousel movies={...} title="Upcoming"  /> */}

        {/* <MoviesCarousel movies={...} title="Upcoming"  /> */}
      </div>
    </main>
  );
}
