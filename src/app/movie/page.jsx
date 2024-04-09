import { getMovieService } from "@/services/movie.service";
import React from "react";
import Link from "next/link";
import { TbMathGreater } from "react-icons/tb";

const page = async () => {
  const movies = await getMovieService(); // Call the function to fetch data
  console.log(movies);

  return (
    <div className=" p-10   overflow-x-scroll scrollbar-hide">
      <span className="flex text-white py-4 text-xl">
        All movies <TbMathGreater className="m-1 ml-2" />
      </span>
      <div className="flex  gap-5 ">
        {movies.payload.map((data) => (
          <div>
            <div
              key={data?.movie_id}
              className=" bg-white  rounded-md shadow-md overflow-hidden p-4 w-60 h-[240px] "
            >
              <Link href={`/movie/${data.movie_id}`}>
                <img
                  className="w-full h-30 object-contain object-center"
                  src={
                    data.image
                      ? data.image
                      : "https://image.tving.com/ntgs/contents/CTC/caip/CAIP1500/ko/20240315/0735/P001754312.jpg/dims/resize/1280"
                  }
                  alt="Info card image"
                />
              </Link>

              <div className="py-5">
                <h2 className="text-lg line-clamp-1 font-bold leading-tight text-gray-900">
                  {data.movie_title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
