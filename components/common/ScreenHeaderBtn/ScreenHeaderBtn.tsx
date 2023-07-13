import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleSheet,
  ImageStyle,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";

interface Props {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }: Props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

interface Styles {
  btnContainer: ImageStyle;
  btnImg: (dimension: string) => ImageStyle;
}

const styles = StyleSheet.create<Styles | any>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});
