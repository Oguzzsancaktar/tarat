
export const TEXT_SIZES = {
  H1: 48,
  H2: 40,
  H3: 32,
  H4: 24,
  H5: 20,
  H6: 18,

  BodyXl: 18,
  BodyL: 16,
  BodyM: 14,
  BodyS: 12,
  BodyXs: 10,

  BodySemiBoldXL: 18,
  BodySemiBoldL: 16,
  BodySemiBoldM: 14,
  BodySemiBoldS: 12,
  BodySemiBoldXs: 10,

  BodyMediumXL: 18,
  BodyMediumL: 16,
  BodyMediumM: 14,
  BodyMediumS: 12,
  BodyMediumXs: 10,

  BodyRegularXL: 18,
  BodyRegularL: 16,
  BodyRegularM: 14,
  BodyRegularS: 12,
  BodyRegularXs: 10,




}

const calculateLineHeight = (key: keyof typeof TEXT_SIZES) => {
  const fontSize = TEXT_SIZES[key]
  return (fontSize * 40 / 100) + fontSize
}

const TEXT_OPTIONS = {

  //HEADING
  H1: {
    fontFamily: "BR_Shape_Bold",
    fontSize: TEXT_SIZES.H1,
    fontWeight: "700",

  },
  H2: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 40,
    fontWeight: "700",

  },
  H3: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 32,
    fontWeight: "700",


  },
  H4: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 24,
    fontWeight: "700",

  },
  H5: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 20,
    fontWeight: "700",

  },
  H6: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 18,
    fontWeight: "700",

  },

  //BODY


  //Body_Bold
  Body2Xl: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: calculateLineHeight("BodyXl"),
    letterSpacing: 0.2,
  },

  BodyXl: {
    fontFamily: "BR_Shape_Bold",
    fontSize: TEXT_SIZES.BodyXl,
    fontWeight: "700",
    lineHeight: calculateLineHeight("BodyXl"),
    letterSpacing: 0.2,
  },

  BodyL: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: calculateLineHeight("BodyL"),
    letterSpacing: 0.2,
  },

  BodyM: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: calculateLineHeight("BodyM"),
    letterSpacing: 0.2,
  },

  BodyS: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: calculateLineHeight("BodyS"),
    letterSpacing: 0.2,
  },

  BodyXs: {
    fontFamily: "BR_Shape_Bold",
    fontSize: 10,
    fontWeight: "700",
    lineHeight: calculateLineHeight("BodyXs"),
    letterSpacing: 0.2,
  },


  //Body_Semibold
  BodySemiBold2XL: {
    fontFamily: "BR_Shape_Semi_Bold",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: calculateLineHeight("BodySemiBoldXL"),
    letterSpacing: 0.2,
  },

  BodySemiBoldXL: {
    fontFamily: "BR_Shape_Semi_Bold",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: calculateLineHeight("BodySemiBoldXL"),
    letterSpacing: 0.2,
  },

  BodySemiBoldL: {
    fontFamily: "BR_Shape_Semi_Bold",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: calculateLineHeight("BodySemiBoldL"),
    letterSpacing: 0.2,
  },

  BodySemiBoldM: {
    fontFamily: "BR_Shape_Semi_Bold",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: calculateLineHeight("BodySemiBoldM"),
    letterSpacing: 0.2,
  },

  BodySemiBoldS: {
    fontFamily: "BR_Shape_Semi_Bold",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: calculateLineHeight("BodySemiBoldS"),
    letterSpacing: 0.2,
  },

  BodySemiBoldXs: {
    fontFamily: "BR_Shape_Semi_Bold",
    fontSize: 10,
    fontWeight: "600",
    lineHeight: calculateLineHeight("BodySemiBoldXs"),
    letterSpacing: 0.2,
  },


  //Body_Medium
  BodyMedium2Xl: {
    fontFamily: "BR_Shape_Medium",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: calculateLineHeight("BodyMediumXL"),
    letterSpacing: 0.2,
  },

  BodyMediumXl: {
    fontFamily: "BR_Shape_Medium",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: calculateLineHeight("BodyMediumXL"),
    letterSpacing: 0.2,
  },

  BodyMediumL: {
    fontFamily: "BR_Shape_Medium",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: calculateLineHeight("BodyMediumL"),
    letterSpacing: 0.2,
  },


  BodyMediumM: {
    fontFamily: "BR_Shape_Medium",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: calculateLineHeight("BodyMediumM"),
    letterSpacing: 0.2,
  },


  BodyMediumS: {
    fontFamily: "BR_Shape_Medium",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: calculateLineHeight("BodyMediumS"),
    letterSpacing: 0.2,
  },

  BodyMediumXs: {
    fontFamily: "BR_Shape_Medium",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: calculateLineHeight("BodyMediumXs"),
    letterSpacing: 0.2,
  },




  //Body_Regular
  BodyRegular2Xl: {
    fontFamily: "BR_Shape_Regular",
    fontSize: 20,
    fontWeight: "400",
    lineHeight: calculateLineHeight("BodyRegularXL"),
    letterSpacing: 0.2,
  },

  BodyRegularXl: {
    fontFamily: "BR_Shape_Regular",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: calculateLineHeight("BodyRegularXL"),
    letterSpacing: 0.2,
  },

  BodyRegularL: {
    fontFamily: "BR_Shape_Regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: calculateLineHeight("BodyRegularL"),
    letterSpacing: 0.2,
  },

  BodyRegularM: {
    fontFamily: "BR_Shape_Regular",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: calculateLineHeight("BodyRegularM"),
    letterSpacing: 0.2,
  },

  BodyRegularS: {
    fontFamily: "BR_Shape_Regular",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: calculateLineHeight("BodyRegularS"),
    letterSpacing: 0.2,
  },

  BodyRegularXs: {
    fontFamily: "BR_Shape_Regular",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: calculateLineHeight("BodyRegularXs"),
    letterSpacing: 0.2,
  },
}




export default TEXT_OPTIONS
