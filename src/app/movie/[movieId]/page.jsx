import { getMovieById } from "@/services/movie.service";
import FiveStar from "@/star-icon/FiveStar";
import FourthStar from "@/star-icon/FourthStar";
import ThreeStar from "@/star-icon/ThreeStar";
import TwoStar from "@/star-icon/TwoStar";
import { BiSolidStar } from "react-icons/bi";
import React from "react";
const page = async ({ params }) => {
  const movieData = await getMovieById(params.movieId);
  console.log("id ", movieData);
  var star;
  return (
    <div className="mt-20">
      <div className=" dark:bg-gray-800 py-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mx-auto md:flex-row ">
            <div className="w-[70%]">
              <div className="h-[600px] rounded-lg  dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={
                    movieData.payload.image
                      ? movieData.payload.image
                      : "https://image.tving.com/ntgs/contents/CTC/caip/CAIP1500/ko/20240315/0735/P001754312.jpg/dims/resize/1280"
                  }
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold  text-white mb-2">
                {" "}
                {movieData.payload.director}
              </h2>

              <p className=" text-white text-sm mb-4"></p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="flex text-xs text-yellow-50">
                    {movieData.payload.runtime} minutes
                  </span>
                  <em>
                    <span className="text-xs   text-yellow-50">
                      {movieData.payload.genre}
                    </span>
                  </em>
                  <div>
                    {Math.round(movieData.payload.rating) == 5 ? (
                      <FiveStar />
                    ) : Math.round(movieData.payload.rating) == 4 ? (
                      <FourthStar />
                    ) : Math.round(movieData.payload.rating) == 3 ? (
                      <ThreeStar />
                    ) : Math.round(movieData.payload.rating) == 2 ? (
                      <TwoStar />
                    ) : (
                      <BiSolidStar className="text-orange-500" />
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <span className="text-sm  text-white"></span>
                <span className=" font-bold text-xl    text-white">
                  {movieData.payload.movie_title} (
                  {movieData.payload.released_year}){" "}
                </span>
                <div>
                  <p className=" text-yellow-50 text-sm mt-2">
                    {movieData.payload.description}{" "}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-xs text-yellow-50">
                  {movieData.payload.posted_at}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
