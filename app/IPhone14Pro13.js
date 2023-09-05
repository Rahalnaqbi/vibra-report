import React, { memo } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5FreeSolid from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
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
  

const IPhone14Pro13 = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone14Pro13, styles.iphone14Pro13FlexBox]}>
      <View
        style={[styles.iphone14Pro13Child, styles.frameScrollviewPosition1]}
      />
      <View style={styles.frame}>
        <View style={[styles.rectangle, styles.rectangleFlexBox1]} />
        <View style={styles.frame1}>
          <View style={[styles.rectangle1, styles.rectangleFlexBox1]} />
          <View style={styles.frameChild} />
          <View style={[styles.rectangle1, styles.rectangleFlexBox1]} />
        </View>
        <View style={[styles.rectangle, styles.rectangleFlexBox1]} />
      </View>
      <Text style={styles.vibrareport}>
        <Text style={styles.vibrareportTxt}>
          <Text style={styles.vibra}>VIBRA</Text>
          <FontAwesome5 name="wave-square" size={28} />
          <Text style={styles.vibra}>REPORT</Text>
        </Text>
      </Text>
      <View style={[styles.iphone14Pro13Item, styles.iphone14Layout1]} />
      <Pressable style={[styles.iphone14Pro13Inner, styles.iphone14Layout1]} />
      <Text style={[styles.tables, styles.tablesTypo]}>Tables</Text>
      <View style={styles.frameView} />
      <Pressable
        style={[styles.rectanglePressable, styles.iphone14Layout1]}
        onPress={() => navigation.navigate("Edited215")}
      />
      <Pressable
        style={styles.plots}
        onPress={() => navigation.navigate("Edited215")}
      >
        <Text style={styles.plots1}>Plots</Text>
      </Pressable>
      <Text style={[styles.text1, styles.textTypo1]}></Text>
      <TouchableOpacity
        style={[styles.touchableopacity, styles.touchableopacityPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro11")}
      >
        <Text style={styles.text2}></Text>
      </TouchableOpacity>
      <Text style={[styles.graphs, styles.tablesTypo]}>Graphs</Text>
      <ScrollView
        style={[styles.frameScrollview, styles.frameScrollviewPosition1]}
        horizontal={false}
        indicatorStyle="default"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        contentContainerStyle={styles.frameScrollViewContent}
      />
      <TouchableOpacity
        style={[
          styles.frameTouchableopacity,
          styles.iphone14Pro13Inner1FlexBox,
        ]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro11")}
      >
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </TouchableOpacity>
      <View
        style={[styles.iphone14Pro13Inner1, styles.iphone14Pro13Inner1FlexBox]}
      >
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
      <Text style={[styles.text3, styles.textTypo1]}></Text>
      <TouchableOpacity
        style={[styles.touchableopacity1, styles.touchableopacityPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro11")}
      >
        <Text style={styles.text2}></Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  frameScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iphone14Pro13FlexBox: {
    flex: 1,
    overflow: "hidden",
  },
  frameScrollviewPosition1: {
    right: 0,
    left: 0,
    position: "absolute",
  },
  rectangleFlexBox1: {
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  iphone14Layout1: {
    height: 27,
    width: 59,
    top: 75,
    position: "absolute",
  },
  tablesTypo: {
    height: 16,
    width: 44,
    justifyContent: "center",
    top: 80,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.fontAwesome6Free,
    right: 22,
    fontSize: FontSize.size_11xl,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  touchableopacityPosition: {
    left: 18,
    position: "absolute",
  },
  iphone14Pro13Inner1FlexBox: {
    paddingVertical: Padding.p_xl,
    paddingHorizontal: Padding.p_3xs,
    bottom: -3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iphone14Pro13Child: {
    top: 72,
    bottom: 0,
    left: 0,
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
    width: "105.24%",
    top: 20,
    left: "-2.86%",
    fontSize: FontSize.size_9xl,
    color: Color.black,
    minWidth: 10,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  iphone14Pro13Item: {
    backgroundColor: Color.chocolate_200,
    left: 0,
  },
  iphone14Pro13Inner: {
    left: 59,
    backgroundColor: Color.limegreen,
  },
  tables: {
    left: 67,
    color: Color.white,
  },
  frameView: {
    top: 65,
    left: 126,
    width: 90,
    position: "absolute",
  },
  rectanglePressable: {
    left: 118,
    backgroundColor: Color.darkorchid_100,
  },
  plots1: {
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  plots: {
    left: 134,
    top: 81,
    position: "absolute",
  },
  text1: {
    bottom: 19,
  },
  text2: {
    fontSize: FontSize.size_11xl,
    color: Color.white,
    fontFamily: FontFamily.fontAwesome5FreeSolid,
    textAlign: "center",
  },
  touchableopacity: {
    bottom: 17,
  },
  graphs: {
    left: 8,
    color: Color.gainsboro,
  },
  frameScrollview: {
    top: 102,
    bottom: 72,
    left: 0,
    overflow: "hidden",
    flex: 1,
  },
  frameItem: {
    width: 53,
    height: 55,
  },
  frameTouchableopacity: {
    left: -2,
  },
  iphone14Pro13Inner1: {
    right: -1,
  },
  text3: {
    bottom: 29,
  },
  touchableopacity1: {
    bottom: 27,
  },
  iphone14Pro13: {
    height: 863,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default IPhone14Pro13;
