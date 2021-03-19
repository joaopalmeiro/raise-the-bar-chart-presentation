import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

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
  // More info: https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset
  textUnderlineOffset: "0.05em",
};

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

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
    {slideNumber === 1 || slideNumber === numberOfSlides ? (
      <Box padding="0px">
        <Text fontSize="16px">👋</Text>
      </Box>
    ) : (
      <Box padding="0px">
        <Text fontSize="16px">• {slideNumber}</Text>
      </Box>
    )}
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

// Usage: <SlideFragments />
// const SlideFragments = () => (
//   <Slide>
//     <Text>This is also a slide fragment.</Text>
//     <Appear>
//       <Text>This item shows up!</Text>
//     </Appear>
//     <Appear>
//       <Text>This item also shows up!</Text>
//     </Appear>
//   </Slide>
// );

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          Raise the Bar (📊)
        </Heading>
        <Text color="primary" fontSize="h3" textAlign="center">
          A summary of <span style={underline}>empirical findings</span> and new
          (or not so new) <span style={underline}>questions</span> in Data
          Visualization
        </Text>
      </FlexBox>
    </Slide>
    <Slide>
      {/* Theme: https://github.com/FormidableLabs/victory/blob/main/packages/victory-core/src/victory-theme/material.js */}
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `$${x / 1000}k`}
          style={{
            axis: { stroke: colors["nord3"] },
            ticks: { stroke: colors["nord3"] },
            tickLabels: { fill: colors["nord3"] },
            // https://github.com/FormidableLabs/victory/issues/1098
            grid: { stroke: "none" },
            tickLabels: { fontFamily: theme["fonts"]["text"] },
          }}
        />
        <VictoryBar
          barRatio={0.8}
          data={data}
          x="quarter"
          y="earnings"
          style={{ data: { fill: colors["nord9"] } }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          style={{
            axis: { stroke: colors["nord3"] },
            ticks: { stroke: colors["nord3"] },
            tickLabels: { fill: colors["nord3"] },
            grid: { stroke: "none" },
            tickLabels: { fontFamily: theme["fonts"]["text"] },
          }}
        />
      </VictoryChart>
    </Slide>
    <Slide>
      <Heading>“It's Over 9000!”</Heading>
      <Text>
        📄 <span style={underline}>Truncating the Y-Axis</span>: Threat or
        Menace?
      </Text>
      <Text>🧑‍🤝‍🧑 M. Correll, E. Bertini, S. Franconeri</Text>
      <Text>🗓️ 2020</Text>
    </Slide>
    <Slide>
      <Heading>
        “Playing <i>Operation</i> is easier”
      </Heading>
      <Text>
        📄 <span style={underline}>Biased Average Position Estimates</span> in
        Line and Bar Graphs: Underestimation, Overestimation, and Perceptual
        Pull
      </Text>
      <Text>🧑‍🤝‍🧑 C. Xiong, C. Ceja, C. Ludwig, S. Franconeri</Text>
      <Text>🗓️ 2020</Text>
    </Slide>
    <Slide>
      <Heading>“It's not you, it's me”</Heading>
      <Text>
        📄 Truth or Square: <span style={underline}>Aspect Ratio</span> Biases
        Recall of Position Encodings.
      </Text>
      <Text>🧑‍🤝‍🧑 C. Ceja, C. McColeman, C. Xiong, S. Franconeri</Text>
      <Text>🗓️ 2021</Text>
    </Slide>
    <Slide>
      <Heading>“No pajamas all day”</Heading>
      <Text>
        📄 Readability and Precision in{" "}
        <span style={underline}>Pictorial Bar Charts</span>
      </Text>
      <Text>🧑‍🤝‍🧑 D. Skau, R. Kosara</Text>
      <Text>🗓️ 2017</Text>
    </Slide>
    <Slide>
      <Heading>“Tower of Pisa yes, italics no”</Heading>
      <Text>
        📄 Good Fonts for <span style={underline}>Dyslexia</span>
      </Text>
      <Text>🧑‍🤝‍🧑 L. Rello, R. Baeza-Yates</Text>
      <Text>🗓️ 2013</Text>
    </Slide>
    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Appear>
        <Text>
          Truncating the Y-axis can be beneficial or harmful (depending on the
          type and purpose).
        </Text>
      </Appear>
      <Appear>
        <Text>
          It <i>breaks</i> a visual convention of bar charts (proportionality).
        </Text>
      </Appear>
      <Appear>
        <Text>
          Umbrella question: What is the{" "}
          <span style={underline}>
            impact on subjective assessments of data
          </span>{" "}
          across multiple charts?
        </Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Appear>
        <Text>Question: HERE</Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading>
        Biased Average Position Estimates in Line and Bar Graphs
      </Heading>
    </Slide>
    <Slide>
      <Heading>Aspect Ratio Biases Recall of Position Encodings</Heading>
      <Appear>
        <Text>The experimental setup is similar to the previous one.</Text>
      </Appear>
    </Slide>
    <Slide>
      <Heading>Precision in Pictorial Bar Charts</Heading>
    </Slide>
    <Slide>
      <Heading>Good Fonts for Dyslexia</Heading>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          Thanks (📊)
        </Heading>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
