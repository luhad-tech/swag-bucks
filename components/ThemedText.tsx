import { Text, useColorScheme } from "react-native";
import { styles } from "../Stylesheet";

interface ThemedTextProps {
  children?: React.ReactNode;
  style?: object;
}

export default function ThemedText(props: ThemedTextProps) {
  const colorScheme = useColorScheme();
  return (
    <Text
      style={[
        colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
}
