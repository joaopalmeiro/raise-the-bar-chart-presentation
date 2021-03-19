import React from "react";
import ReactDOM from "react-dom";
import {
  Appear,
  Box,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";

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
          Although subjective perception is affected, nothing has been
          falsified.
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Appear>
        <Text>
          Umbrella question: What is the{" "}
          <span style={underline}>
            impact on subjective assessments of data
          </span>{" "}
          across multiple charts?
        </Text>
      </Appear>
      <Appear>
        <Text>
          Is the impact of Y-axis truncation different between bar and line
          charts?
        </Text>
      </Appear>
      <Appear>
        <Text>
          Does explicitly indicating that Y-axis truncation has taken place
          reduce the introduced bias?
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>They conducted 3 crowdsourced online experiments.</Text>
      <Appear>
        <Text>"Which value is larger, the first value or the last value?"</Text>
      </Appear>
      <Appear>
        <Text>
          "Subjectively, how different is the first value compared to the last
          value?"
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>
        <span style={underline}>Experiment 1</span> (framing interventions):
      </Text>
      <UnorderedList>
        <ListItem>2 charts types (bar and line)</ListItem>
        <Appear>
          <ListItem>Value-based and trend-based questions</ListItem>
        </Appear>
        <Appear>
          <ListItem>3 truncation levels (0%, 25%, 50%)</ListItem>
        </Appear>
        <Appear>
          <ListItem>2 slope levels (12.5%, 25%)</ListItem>
        </Appear>
        <Appear>
          <ListItem>2 or 3 data values</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <ListItem>
          Increasing the starting point of the Y-axis results in larger
          perceived severity in effect size
        </ListItem>
        <Appear>
          <ListItem>
            Neither the chart type (bar or line) nor the method of soliciting
            the perceived severity (value or trend) produced significant
            differences
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>
        <span style={underline}>Experiment 2</span> (visual design
        interventions):
      </Text>
      <UnorderedList>
        <ListItem>
          Assess the impact of visual design elements in bar charts that
          indicate truncation on perceived effect size
        </ListItem>
        <Appear>
          <ListItem>
            3 charts types (bar, broken axis bar, gradient bar)
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <ListItem>
          There was no significant difference in the perceived severity between
          these designs
        </ListItem>
        <Appear>
          <ListItem>
            In other words, increased axis truncation resulted in similar
            increases in perceived severity
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>
        <span style={underline}>Experiment 3</span> (bias in value estimation):
      </Text>
      <UnorderedList>
        <ListItem>
          Does truncating the Y-axis not only result in a qualitative increase
          in effect sizes but also in misreading the values?
        </ListItem>
        <Appear>
          <ListItem>
            Does attending to the numbers reduce this exaggeration?
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>"What is the value of the first bar (0-100%)"</ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Truncating the Y-Axis</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <ListItem>
          Perceived severity was significantly different across levels of
          truncation
        </ListItem>
        <Appear>
          <ListItem>
            The error in estimating trend was not significantly different
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            However, the error in estimating individual values was significantly
            different (25% start)
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Takeaways</Heading>
      <Appear>
        <Text>
          We cannot rely on visual indicators of truncated axes — the subjective
          impact of axis truncation is persistent across visualizations designs.
        </Text>
      </Appear>
      <Appear>
        <Text>
          We have a great deal of control over the perceived effect size — we
          have to take into account what we want to communicate at a per-data
          and per-task level.
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Appear>
        <Text>Position is one of the most precise encoding channels.</Text>
      </Appear>
      <Appear>
        <Text>
          However, perception of data from positional encodings can also be
          biased in systematic ways.*
        </Text>
      </Appear>
      <Appear>
        <Text>
          *For reports of average position across a short delay (at least).
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Text>
        They conducted 3 experiments with students from Northwestern University.
      </Text>
      <Appear>
        <Text>They used noisy/uniform line/bar charts.</Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Text>
        Experiment 1: How accurate can people perceive average positions of a
        single line or single set of bars in a chart?
      </Text>
      <Appear>
        <Text>Experiment 2: What about two lines or two sets of bars?</Text>
      </Appear>
      <Appear>
        <Text>
          Experiment 3: What about a line and a set of bars on the same chart?
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>
            The average position of the line was underestimated
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            The bottom line average was more underestimated than the top line
            average
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Participants did not <i>simply use</i> the lowest point or an
            average between the highest and lowest point
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>
            The average position of the bars was overestimated
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            The bottom bars average was more overestimated than the top bars
            average
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Participants did not <i>simply use</i> the highest point or an
            average between the highest and lowest point
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>
            For 2 data series, there is the "perception pull" effect: position
            estimates for a target data series were <i>pulled</i> toward the
            irrelevant data series
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            For top lines and bottom bars, it exaggerated the underestimation
            and overestimation, respectively
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Biased Average Position Estimates</Heading>
      <Text>
        <span style={underline}>Main conclusions</span> (statistically
        speaking):
      </Text>
      <UnorderedList>
        <Appear>
          <ListItem>
            For bottom lines and top bars, it reduced the underestimation and
            overestimation, respectively
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            The estimation error did not depend on whether the line or bar was
            noisy or uniform
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Takeaways</Heading>
      <Appear>
        <Text>The position encoding channel is not innocuous.</Text>
      </Appear>
      <Appear>
        <Text>
          In general, since judgments were more precise for bars compared to
          lines, we might consider using bars to show our data (ignoring other
          constraints).
        </Text>
      </Appear>
      <Appear>
        <Text>
          We can plot two data series in different subcharts to avoid the
          "perceptual pull" effect.
        </Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Aspect Ratio Biases</Heading>
      <Appear>
        <Text>
          It addresses one of the limitations of the previous paper: aspect
          ratios.
        </Text>
      </Appear>
      <Appear>
        <Text>The experimental setup is similar to the previous one.</Text>
      </Appear>
    </Slide>

    <Slide>
      <Heading>Aspect Ratio Biases</Heading>
      <Text>
        <span style={underline}>Food for thought</span>:
      </Text>
      <Appear>
        <Text>HERE</Text>
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
