import React from "react";

import { Avatar, Typography, Rating } from "@material-tailwind/react";

const Ratings = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-10">
      <Typography
        color="blue-gray"
        className="mb-10 text-2xl md:text-4xl p-2 border-b-2 border-b-light-blue-700 font-bold"
      >
        What our users are saying
      </Typography>

      <div className="flex flex-wrap justify-center items-center p-5 md:p-0 gap-10">
        {Array(3)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="px-8 text-center max-w-md bg-white shadow bg-opacity-50 border-b-2 border-b-blue-300 backdrop-blur-md p-5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-6 font-semibold"
              >
                &quot; I was able to find my dream job in just a few days. Thank
                you &quot;
              </Typography>
              <Avatar
                src="https://avatars.githubusercontent.com/u/86846633?v=4"
                alt="image"
                size="lg"
              />
              <Typography variant="h6" className="mt-4">
                Ashutosh Gautam
              </Typography>
              <Typography color="gray" className="mb-4 font-normal">
                MERN Stack Developer
              </Typography>
              <Rating value={5} readonly />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ratings;
