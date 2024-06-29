import { Button } from "@/components/ui/button";
import Image from "next/image";
import MoviesCarousel from "@/components/ui/MoviesCarousel";
import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "@/lib/getMovies";
import CarouselBannerWrapper from "@/components/ui/CarouselBannerWrapper";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="">
      <CarouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
