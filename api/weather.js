import { useQuery } from "@tanstack/react-query";

export const useGetForecast = (longitude, latitude, city) => {
  return useQuery({
    queryKey: ["forecast", latitude, longitude],
    queryFn: async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=a3256cd85ce04d39a29140704243003&q=${latitude} ${longitude}&days=7&aqi=no&alerts=no`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //   console.log(data, "play");
      console.log("again");
      return data;
    },
  });
};

export const useGetLocations = (location) => {
  return useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=a3256cd85ce04d39a29140704243003&q=${location}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      //   console.log(location, "papa");
      const data = await response.json();
      //   console.log(data, "viccky");
      return data;
    },
  });
};
