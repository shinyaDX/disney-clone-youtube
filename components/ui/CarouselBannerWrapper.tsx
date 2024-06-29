import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);
  return (
    <div className="w-full overflow-hidden">
      <CarouselsBanner movies={movies} />
    </div>
  );
}

export default CarouselBannerWrapper;
