import { textStyles } from "./Text";

interface TextProps {
  selectedTextStyle: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const TextBox = ({ selectedStyle }:Record<string,string>) => {
  return (
    <div className={textStyles[selectedStyle]}>
      A "storybook" in development refers to a dedicated tool like "Storybook"
      that allows developers to build, test, and document individual UI
      components in isolation from the main application, providing a focused
      environment to refine and perfect each component before integrating them
      into the larger project, thus streamlining the development process and
      ensuring consistency across the user interface. Key points about
      Storybook: Component Isolation: Storybook creates a separate space where
      developers can work on individual UI components without being affected by
      the complexity of the overall application logic or data flow, enabling
      focused development and easier debugging. Visual Testing: With Storybook,
      developers can easily preview different states and variations of each
      component visually, allowing them to quickly identify design issues and
      ensure a consistent user experience.
    </div>
  );
};

export default TextBox;
