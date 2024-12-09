import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import Logo from "./Logo";
import { Color, FontSize, FontFamily, Gap, Padding } from "../../GlobalStyles";

export type TopNavbarType = {
  iconlyLightOutlineArrowLeft?: ImageSourcePropType;
  iconlyCurvedPlus?: ImageSourcePropType;
  iconlyCurvedNotification?: ImageSourcePropType;
  iconlyCurvedBookmark?: ImageSourcePropType;
  showTypeLogoDefaultComponent?: boolean;

  /** Variant props */
  component?: "Navbar";
  theme?: "Light" | "Dark";

  /** Style props */
  themeLightComponentNavbarAlignSelf?: string;
  themeLightComponentNavbarWidth?: number | string;
};

const TopNavbar = ({
  component = "Navbar",
  theme = "Dark",
  themeLightComponentNavbarAlignSelf,
  themeLightComponentNavbarWidth,
  iconlyLightOutlineArrowLeft,
  iconlyCurvedPlus,
  iconlyCurvedNotification,
  iconlyCurvedBookmark,
  showTypeLogoDefaultComponent,
}: TopNavbarType) => {
  return (
    <View style={[styles.root, styles.autoFlexBox]}>
      <View style={[styles.autoLayoutHorizontal, styles.autoFlexBox]}>
        <Logo />
        <Text style={styles.title}>Ledfit</Text>
      </View>
      <View style={[styles.autoLayoutHorizontal1, styles.autoFlexBox]}>
        <Image
          style={styles.iconlycurvedplusLayout}
          source={iconlyCurvedNotification}
        />
        <Image
          style={styles.iconlycurvedplusLayout}
          source={iconlyCurvedBookmark}
        />
      </View>
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    height: 76,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
    gap: Gap.gap_sm,
  },
  autoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  autoLayoutHorizontal: {
    gap: Gap.gap_sm,
    flex: 1,
  },
  iconlycurvedplus: {
    display: "none",
  },
  autoLayoutHorizontal1: {
    justifyContent: "flex-end",
    gap: Gap.gap_xl,
  },

  // Componentes //
  title: {
    fontSize: FontSize.h4Bold_size,
    lineHeight: 36,
    fontWeight: "900",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.greyscale300,
    textAlign: "left",
    flex: 1,
  },

  // Iconos //
  iconlycurvedplusLayout: {
    tintColor: Color.greyscale300,
    overflow: "hidden",
    height: 28,
    width: 28,
  },
});
