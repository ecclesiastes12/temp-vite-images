import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useGlobalContext } from "./context";

//check Gallery1.jsx for the previous code before making the form more dynamic. url modified
const url =
  "https://api.unsplash.com/search/photos?client_id=MqRQJPZUJdk_FfSP7a-IVISeLzUR5s3UiY4bUHmK9sE";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      //code modified to make the url more dynamic.Default parameter replaced with searchTerm
      const result = await axios.get(`${url}&query=${searchTerm}`);

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
