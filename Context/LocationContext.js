import React, { useState, useEffect, createContext, useContext } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
export const locationCxt = createContext({
  latitude: "",
  longitude: "",
  updateLocationData: () => {},
});
export default function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(2);
  let updateLocationData = (longitude, latitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});

        setLocation(location);
        // longitude = location.coords.longitude;
        // latitude = location.coords.latitude;
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        setIsloading(false);

        let geocode = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        if (geocode && geocode.length > 0) {
          setAddress(geocode[0].city + ", " + geocode[0].country);
          setCity(geocode[0].city);
        } else {
          setAddress("Address not found");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setAddress("Error fetching location");
      }
    })();
  }, []);
  // console.log(city, "city");
  // console.log(address);
  return (
    <locationCxt.Provider
      value={{ longitude, latitude, city, isLoading, updateLocationData }}
    >
      {children}
    </locationCxt.Provider>
  );
}
export const useLocation = () => {
  const locationObj = useContext(locationCxt);
  return locationObj;
};
