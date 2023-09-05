import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5FreeSolid from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* fonts */
export const FontFamily = {
    fontAwesome5FreeSolid: "FontAwesome5Free-Solid",
    interExtraLight: "Inter-ExtraLight",
    interSemiBold: "Inter-SemiBold",
    interLight: "Inter-Light",
    fontAwesome6Free: "Font Awesome 6 Free",
    interMedium: "Inter-Medium",
  };
  /* font sizes */
  export const FontSize = {
    size_61xl: 80,
    size_9xl: 28,
    size_lg: 18,
    size_xl: 20,
    size_11xl: 30,
    size_2xs: 11,
  };
  /* Colors */
  export const Color = {
    white: "#fff",
    dimgray_100: "#736f6f",
    dimgray_200: "rgba(117, 109, 109, 0.2)",
    black: "#000",
    firebrick: "#b02424",
    gray_100: "#fdfdfd",
    gray_200: "rgba(0, 0, 0, 0.2)",
    darkgray: "#989696",
    whitesmoke: "#efefef",
    gainsboro: "#dfdfdf",
    darkorchid_100: "#ba3cda",
    limegreen: "#53b724",
    chocolate_100: "#ca6d2a",
    chocolate_200: "#ba6426",
    forestgreen: "#3f881c",
  };
  /* Paddings */
  export const Padding = {
    p_3xs: 10,
    p_xl: 20,
  };
  /* border radiuses */
  export const Border = {
    br_5xs: 8,
    br_8xs: 5,
  };
  

const IPhone14Pro16 = () => {
  return (
    <View style={styles.iphone14Pro16}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.instanceWrapper, styles.vibrareportFlexBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
        <View style={styles.frame1}>
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
          <View style={[styles.frameInner, styles.frameLayout]} />
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
        </View>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
      </View>
      <Text style={[styles.vibrareport, styles.vibrareportFlexBox]}>
        <Text style={styles.vibrareportTxt}>
          <Text style={styles.vibra}>VIBRA</Text>
          <FontAwesome5 name="wave-square" size={28} />
          <Text style={styles.vibra}>REPORT</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 393,
    backgroundColor: Color.white,
  },
  vibrareportFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleFlexBox: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  frameChild: {
    height: 780,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    width: 79,
    height: 80,
  },
  instanceWrapper: {
    marginTop: -90,
    marginLeft: -77.5,
    top: "50%",
    left: "50%",
    width: 157,
    height: 100,
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  rectangleParent: {
    top: 72,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
  },
  rectangle: {
    width: 1,
  },
  rectangle1: {
    height: 1,
  },
  frameInner: {
    height: 72,
  },
  frame1: {
    width: 391,
    overflow: "hidden",
  },
  frame: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    right: 0,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  vibra: {
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
  },
  text: {
    fontFamily: FontFamily.fontAwesome5FreeSolid,
  },
  vibrareportTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  vibrareport: {
    width: "146.74%",
    top: 20,
    left: "-23.16%",
    fontSize: FontSize.size_9xl,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    minWidth: 10,
  },
  iphone14Pro16: {
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro16;
