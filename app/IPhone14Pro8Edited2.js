import * as React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5FreeSolid from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DocumentPicker, { types } from 'react-native-document-picker';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
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
  

const IPhone14Pro8Edited2 = () => {
    const navigation = useNavigation();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        type: [types.csv],
      });
      setFileResponse(response);
      setSelectedFile(result);
      navigation.navigate("IPhone14Pro12", { selectedFile: result });
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <View style={styles.iphone14Pro8Edited2}>
      <Pressable
        style={styles.iphone14Pro8Edited2Child}
        onPress={() => navigation.navigate("IPhone14Pro11")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
        <View style={styles.frame1}>
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
          <View style={styles.frameChild} />
          <View style={[styles.rectangle1, styles.rectangleFlexBox]} />
        </View>
        <View style={[styles.rectangle, styles.rectangleFlexBox]} />
      </View>
      <TouchableOpacity
        style={[styles.iphone14Pro8Edited2Inner, styles.frameFlexBox]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("IPhone14Pro8Edited2")}
      >
        <View style={styles.frameFlexBox}>
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => navigation.navigate("IPhone14Pro8Edited2")}
          >
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.frame2}>
        <View style={[styles.rectangle4, styles.rectangleBg]} />
        <View style={styles.frame3}>
          <View style={[styles.rectangle5, styles.rectangleBg]} />
          <View style={styles.frameItem} />
          <View style={[styles.rectangle5, styles.rectangleBg]} />
        </View>
        <View style={[styles.rectangle4, styles.rectangleBg]} />
      </View>
      <View style={[styles.frameView, styles.fileWrapperPosition]}>
        <View style={styles.frameInner} />
      </View>
      <View
        style={[
          styles.pleaseUploadYourCsvFileWrapper,
          styles.fileWrapperPosition,
        ]}
      >
        <Text
          style={[styles.pleaseUploadYour, styles.vibrareportClr]}
        >{`Please upload your csv file. `}</Text>
      </View>
      <View style={[styles.selectFileWrapper, styles.fileWrapperPosition]}>
      <TouchableOpacity
            activeOpacity={0.2}
            onPress={() => {handleDocumentSelection}}
          >
        <Text style={styles.selectFile}>Select File</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.vibrareport, styles.vibrareportClr]}>
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
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rectangleFlexBox: {
    alignSelf: "stretch",
    backgroundColor: Color.whitesmoke,
  },
  rectangleBg: {
    backgroundColor: Color.dimgray_100,
    alignSelf: "stretch",
  },
  fileWrapperPosition: {
    padding: Padding.p_3xs,
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vibrareportClr: {
    display: "flex",
    color: Color.black,
    alignItems: "center",
  },
  iphone14Pro8Edited2Child: {
    top: 72,
    bottom: 0,
    backgroundColor: Color.whitesmoke,
    left: 0,
    right: 0,
    position: "absolute",
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
    backgroundColor: Color.whitesmoke,
  },
  frame1: {
    width: 391,
    overflow: "hidden",
  },
  frame: {
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.whitesmoke,
    left: 0,
    right: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_61xl,
    color: Color.darkgray,
    width: 100,
    height: 100,
    textAlign: "center",
    fontFamily: FontFamily.fontAwesome5FreeSolid,
  },
  iphone14Pro8Edited2Inner: {
    top: 108,
    left: 16,
    backgroundColor: Color.gray_200,
    position: "absolute",
  },
  rectangle4: {
    width: 1,
  },
  rectangle5: {
    height: 1,
  },
  frameItem: {
    backgroundColor: Color.gray_100,
    width: 200,
    height: 119,
  },
  frame3: {
    overflow: "hidden",
  },
  frame2: {
    marginTop: -60.5,
    marginLeft: -100.5,
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  frameInner: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.firebrick,
    width: 190,
    height: 27,
  },
  frameView: {
    marginTop: 4.5,
    marginLeft: -103.5,
    padding: Padding.p_3xs,
  },
  pleaseUploadYour: {
    fontSize: FontSize.size_lg,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    textAlign: "left",
    width: 187,
    height: 29,
  },
  pleaseUploadYourCsvFileWrapper: {
    marginTop: -53.5,
    marginLeft: -103.5,
    padding: Padding.p_3xs,
  },
  selectFile: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    textAlign: "center",
  },
  selectFileWrapper: {
    marginTop: 8,
    marginLeft: -50.5,
  },
  vibra: {
    fontWeight: "200",
    fontFamily: FontFamily.interExtraLight,
  },
  text1: {
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
    height: 34,
    minWidth: 10,
    textAlign: "center",
    position: "absolute",
  },
  iphone14Pro8Edited2: {
    backgroundColor: Color.white,
    flex: 1,
    height: 889,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone14Pro8Edited2;