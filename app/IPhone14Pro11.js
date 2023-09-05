import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5FreeSolid from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FontFamily = {
    interExtraLight: "Inter-ExtraLight",
    fontAwesome5FreeSolid: "FontAwesome5Free-Solid",
    interSemiBold: "Inter-SemiBold",
    interLight: "Inter-Light",
    fontAwesome6Free: "Font Awesome 6 Free",
    interMedium: "Inter-Medium",
  };
  /* font sizes */
  export const FontSize = {
    size_9xl: 28,
    size_61xl: 80,
    size_lg: 18,
    size_xl: 20,
    size_11xl: 30,
    size_2xs: 11,
  };
  /* Colors */
  export const Color = {
    white: "#fff",
    black: "#000",
    dimgray_100: "#736f6f",
    dimgray_200: "rgba(117, 109, 109, 0.2)",
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
  

const IPhone14Pro11 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.iphone14Pro11}>
      <View style={styles.iphone14Pro11Child} />
      <View style={styles.frame}>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
        <View style={styles.frame1}>
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
          <View style={styles.frameChild} />
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
        </View>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
      </View>
      <Text style={styles.vibrareport}>
        <Text style={styles.vibrareportTxt}>
          <Text style={styles.vibra}>VIBRA</Text>
          <FontAwesome5 name="wave-square" size={28} />
          <Text style={styles.vibra}>REPORT</Text>
        </Text>
      </Text>
      <TouchableOpacity
        style={[styles.iphone14Pro11Inner, styles.wrapperFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro8Edited2")}
      >
        <View style={styles.wrapperFlexBox}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate("IPhone14Pro8Edited2")}
          >
            <Text style={styles.text1}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleFlexBox: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iphone14Pro11Child: {
    top: 72,
    right: 1,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectangle: {
    width: 1,
  },
  rectangle1: {
    height: 1,
  },
  frameChild: {
    width: 393,
    height: 72,
    backgroundColor: Color.white,
  },
  frame1: {
    width: 391,
    overflow: "hidden",
  },
  frame: {
    top: 0,
    right: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 74,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 0,
    position: "absolute",
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
    display: "flex",
    height: 34,
    minWidth: 10,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_61xl,
    color: "#c1bfbf",
    width: 100,
    height: 100,
    fontFamily: FontFamily.fontAwesome5FreeSolid,
    textAlign: "center",
  },
  iphone14Pro11Inner: {
    top: 108,
    left: 16,
    backgroundColor: Color.dimgray_200,
    position: "absolute",
    justifyContent: "center",
  },
  iphone14Pro11: {
    flex: 1,
    height: 889,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro11;