import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  FullScreen,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
} from "spectacle";

// Source: https://www.nordtheme.com/ (by Arctic Ice Studio & Sven Greb)
const colors = {
  nord0: "#2e3440",
  nord1: "#3b4252",
  nord2: "#434c5e",
  nord3: "#4c566a",
  nord4: "#d8dee9",
  nord5: "#e5e9f0",
  nord6: "#eceff4",
  nord7: "#8fbcbb",
  nord8: "#88c0d0",
  nord9: "#81a1c1",
  nord10: "#5e81ac",
  nord11: "#bf616a",
  nord12: "#d08770",
  nord13: "#ebcb8b",
  nord14: "#a3be8c",
  nord15: "#b48ead",
};

const underline = {
  textDecoration: "underline",
  textDecorationStyle: "dotted",
  textDecorationColor: colors["nord9"],
};

// SPECTACLE_CLI_THEME_START
// Default theme: https://github.com/FormidableLabs/spectacle/blob/main/src/theme/default-theme.js
const theme = {
  fonts: {
    header: '"Space Grotesk", Helvetica, Arial, sans-serif',
    text: '"Rubik", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: colors["nord3"],
    secondary: colors["nord2"],
    tertiary: colors["nord6"],
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = ({ slideNumber, numberOfSlides }) => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding={2}>
      <FullScreen size={16} color={colors["nord3"]} />
    </Box>
    <Box padding="0px">
      <Text fontSize="16px">• {slideNumber}</Text>
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <Slide>
    <Text>This is also a slide fragment.</Text>
    <Appear>
      <Text>This item shows up!</Text>
    </Appear>
    <Appear>
      <Text>This item also shows up!</Text>
    </Appear>
  </Slide>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide slideNum="1">
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          Raise the Bar (📊)
        </Heading>
        <Text color="primary" fontSize="h3" textAlign="center">
          A summary of <span style={underline}>empirical findings</span> and new{" "}
          <span style={underline}>questions</span> in Data Visualization
        </Text>
      </FlexBox>
    </Slide>
    <SlideFragments />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
