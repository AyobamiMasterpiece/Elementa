import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LocationText from "../Components/LocationText";
import TodayDate from "../Components/TodayDate";
import SC from "../assets/weathericon/SunnyCloudyRainy";
import SunnyCloudySvg from "../assets/weathericon/SunnyCloudySvg";
import CloudySvg from "../assets/weathericon/CloudySvg";
import SunnySvg from "../assets/weathericon/SunnySvg";
import CloudyRainySvg from "../assets/weathericon/CloudyRainySvg";
import MainReport from "../Components/MainReport";
import Card from "../UI/Card";
import RainIcon from "../assets/appIcon/RainIcon";
import MainWeatherReportCard from "../Components/MainWeatherReportCard";
import HourlyReportCard from "../Components/HourlyReportCard";
import { StatusBar } from "expo-status-bar";
import SearchInput from "../UI/SearchInput";
import LocationContext, { useLocation } from "../Context/LocationContext";
import { useGetForecast, useGetLocations } from "../api/weather";
import { kmToMm, mmToCm } from "../Util/conversionFunc";
import LocationCard from "../Components/LocationCard";
import { Skeleton } from "@rneui/themed";
export default function HomeScreen() {
  const [showInput, setShowInput] = useState(false);
  const [location, setLocation] = useState("");
  const [visibleItemIndex, setVisibleItemIndex] = useState(-1);

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setVisibleItemIndex(viewableItems[0].index);
    }
  };

  const {
    latitude,
    longitude,

    city,
    isLoading: isLocationContextLoading,
  } = useLocation();
  console.log(isLocationContextLoading, latitude, "normal");
  // console.log(city, "enoconcernu", latitude, longitude);
  const changeLocationSearch = (text) => {
    setLocation(text);
    refetchLocation();
  };
  const {
    data: locations,
    error: locationError,
    isLoading: isLocationFetching,
    refetch: refetchLocation,
  } = useGetLocations(location);
  // console.log(locationData);
  // console.log(locationData, isLocationFetching);
  // console.log(locations);
  // console.log(latitude, "initial");
  const { data, error, isLoading } = useGetForecast(longitude, latitude, city);
  // console.log(data);

  if (isLoading || isLocationContextLoading) {
    return <Skeleton height={"100%"} animation="wave"></Skeleton>;
  }

  let {
    location: { name: locationState, country },
    current: {
      temp_c: temperatureCelsius,
      condition: { text, icon },
      temp_f: temperatureFahrenheit,
      wind_kph: wind,
      humidity,
      precip_mm: rain,
    },
    forecast: { forecastday },
  } = data;
  const { hour } = forecastday[0]; ///get hours of day 1

  rain = mmToCm(rain); //conversion of rain from mm to cm(standard)
  let weatherPerHour = hour.map((details) => {
    ////get object hours in clean formart
    const {
      time,
      temp_c,
      temp_f,
      condition: { icon, text },
    } = details;
    return { time, temp_c, temp_f, icon, text };
  });

  return (
    <LinearGradient
      colors={["#FEB054", "#FEE3BC"]}
      style={styles.rootContainer}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={null}
        style={styles.linearGradientContainer}
        contentContainerStyle={
          {
            // flex: 1,
            // backgroundColor: "black",
            // padding: 10,
          }
        }
      >
        <SearchInput
          show={showInput}
          onPress={() => {
            setShowInput(!showInput);
          }}
          location={location}
          changeLocationSearch={changeLocationSearch}
        ></SearchInput>
        <View
          style={{
            //
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          {location.trim() == "" || locations?.length > 0 ? (
            <FlatList
              data={locations}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item }) => {
                const { country, name, region, id, lat, lon } = item;
                return (
                  <LocationCard
                    location={`${name}, ${country}, ${region}`}
                    lat={lat}
                    lon={lon}
                  ></LocationCard>
                );
              }}
              keyExtractor={({ id }) => {
                return id;
              }}
            ></FlatList>
          ) : (
            <Card
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <Text>{`No locations matching ${
                location.length > 10 ? location.slice(0, 9) + "..." : location
              }`}</Text>
            </Card>
          )}
        </View>
        <StatusBar style="light"></StatusBar>

        <LocationText>{locationState},</LocationText>
        <LocationText>{country}</LocationText>
        <TodayDate>{new Date()}</TodayDate>
        <MainReport
          temperatureCelsius={temperatureCelsius}
          text={text}
          icon={icon}
          temperatureFahrenheit={temperatureFahrenheit}
        ></MainReport>
        <MainWeatherReportCard
          description={"Rain"}
          value={`${rain}cm`}
          type="rain"
        ></MainWeatherReportCard>
        <MainWeatherReportCard
          description={"Wind"}
          value={"19km/h"}
          type="wind"
        ></MainWeatherReportCard>
        <MainWeatherReportCard
          description={"Humidity"}
          value={`${humidity}%`}
          type={"humidity"}
        ></MainWeatherReportCard>
        {
          /////////scrll hourly
        }

        <FlatList
          style={{
            marginBottom: 30,
            // marginVertical: 30,
          }}
          contentContainerStyle={{
            // backgroundColor: "pink",
            alignItems: "center",
            padding: 20,
          }}
          data={weatherPerHour}
          renderItem={({ item, index }) => {
            const isCloseToLeftEdge = index === visibleItemIndex;
            return (
              <HourlyReportCard
                hourReport={item}
                isCloseToLeftEdge={isCloseToLeftEdge}
              ></HourlyReportCard>
            );
          }}
          keyExtractor={(item) => {
            return item.time;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50, // Adjust this value as needed
          }}
        ></FlatList>
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: "blue",
  },
  linearGradientContainer: {
    padding: 10,
  },
});
