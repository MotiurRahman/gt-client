import { useQuery } from "@tanstack/react-query";
import React from "react";

const Home = () => {
  const {
    isLoading,
    error,
    data: userData = [],
    refetch,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1>this is home page{userData.length}</h1>
    </div>
  );
};

export default Home;
