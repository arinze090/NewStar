import { View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { COLORS } from "../../theme/themes";
import { windowWidth } from "../../utils/Dimensions";

const sliderData = [
  {
    id: 1,
    image: require("../../assets/1.jpg"),
  },
  {
    id: 2,
    image: require("../../assets/2.jpg"),
  },
  {
    id: 3,
    image: require("../../assets/3.jpg"),
  },
];

const Carousels = ({ props }) => {
  const [loading, setloading] = useState(false);
  const onLoadEnd = () => {
    setloading(true);
  };

  function CarouselFun({ props }) {
    return (
      <View>
        <Image
          source={props.image}
          style={{
            height: 200,
            width: "95%",
            borderRadius: 10,
            resizeMode: "cover",
            marginRight: 5,
          }}
        //   onLoad={onLoadEnd}
        //   onLoadEnd={onLoadEnd}
        />
      </View>
    );
  }

  const Slider = ({ item, index }) => {
    return <CarouselFun props={item} />;
  };

  return (
    <View style={{ position: "relative", margin: 10 }}>
      <Carousel
        loop
        width={windowWidth}
        height={200}
        autoPlay={true}
        data={sliderData}
        scrollAnimationDuration={3000}
        renderItem={Slider}
        onLoad={onLoadEnd}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

export default Carousels;
