import * as React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5FreeSolid from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
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
  

const Edited215 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.edited215}>
      <View style={[styles.edited215Child, styles.frameViewPosition]} />
      <View style={styles.frame}>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
        <View style={styles.frame1}>
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
          <View style={styles.frameChild} />
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
        </View>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
      </View>
      <Pressable style={[styles.edited215Item, styles.edited215Layout]} />
      <Pressable style={[styles.edited215Inner, styles.edited215Layout]} />
      <Text style={[styles.tables, styles.plotsTypo]}>Tables</Text>
      <View style={[styles.rectangleView, styles.edited215Layout]} />
      <Text style={[styles.plots, styles.plotsTypo]}>Plots</Text>
      <Text style={[styles.graphs, styles.plotsTypo]}>Graphs</Text>
      <View style={[styles.frameView, styles.frameViewPosition]} />
      <Text style={styles.vibrareport}>
        <Text style={styles.vibrareportTxt}>
          <Text style={styles.vibra}>VIBRA</Text>
          <FontAwesome5 name="wave-square" size={28} />
          <Text style={styles.vibra}>REPORT</Text>
        </Text>
      </Text>
      <TouchableOpacity
        style={[styles.frameTouchableopacity, styles.edited215Inner1FlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro11")}
      >
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </TouchableOpacity>
      <View style={[styles.edited215Inner1, styles.edited215Inner1FlexBox]}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <FontAwesome5 name="share" size={28} />
      <TouchableOpacity
        style={styles.touchableopacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro11")}
      >
       <FontAwesome5 name="home" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameViewPosition: {
    right: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectangleFlexBox: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  edited215Layout: {
    height: 27,
    width: 59,
    top: 75,
    position: "absolute",
  },
  plotsTypo: {
    height: 16,
    width: 44,
    justifyContent: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: 80,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  edited215Inner1FlexBox: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xs,
    bottom: -3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.white,
  },
  edited215Child: {
    top: 72,
    bottom: 0,
    left: 0,
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
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  edited215Item: {
    backgroundColor: Color.chocolate_100,
    left: 0,
  },
  edited215Inner: {
    left: 59,
    backgroundColor: Color.limegreen,
  },
  tables: {
    left: 67,
    color: Color.white,
    width: 44,
    justifyContent: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: 80,
  },
  rectangleView: {
    left: 118,
    backgroundColor: "#a738c2",
  },
  plots: {
    left: 126,
    color: Color.gainsboro,
    width: 44,
    justifyContent: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: 80,
  },
  graphs: {
    left: 8,
    color: Color.white,
    width: 44,
    justifyContent: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    top: 80,
  },
  frameView: {
    top: 102,
    bottom: 75,
    left: 0,
    overflow: "hidden",
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
    minWidth: 10,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  frameItem: {
    width: 53,
    height: 55,
  },
  frameTouchableopacity: {
    left: -2,
  },
  edited215Inner1: {
    right: -1,
  },
  text1: {
    right: 22,
    bottom: 29,
    fontFamily: FontFamily.fontAwesome6Free,
    position: "absolute",
  },
  text2: {
    fontFamily: FontFamily.fontAwesome5FreeSolid,
  },
  touchableopacity: {
    left: 18,
    bottom: 27,
    position: "absolute",
  },
  edited215: {
    flex: 1,
    height: 860,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Edited215;
