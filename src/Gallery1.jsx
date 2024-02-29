import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const url =
  "https://api.unsplash.com/search/photos?client_id=MqRQJPZUJdk_FfSP7a-IVISeLzUR5s3UiY4bUHmK9sE&query=office";

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  //console.log(response);

  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading ...</h4>
      </section>
    );
  }
  if (response.isError) {
    <section>
      <h4>There was an error ...</h4>
    </section>;
  }

  const results = response.data.results;
  //console.log(results);

  //check if the result array is empty
  if (results.length < 1) {
    return (
      <section>
        <h4>No results found ...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        //optional chaining is one of the best options is use when dealing with images
        // if the item exist, grab the urls. if the urls exist grab the regular one.

        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
