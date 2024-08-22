import { StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n/i18next";
import { useState } from "react";

export default function TabTwoScreen() {
  const [text, onChangeText] = useState("");
  const { t } = useTranslation(["showcaseScreen"]);
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("title")}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextInput
          placeholder={t("placeholder")}
          style={[styles.input, styles.rtlInput]}
          onChangeText={onChangeText}
          value={text}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  rtlInput: isRTL ? { textAlign: "right" } : {},
});
