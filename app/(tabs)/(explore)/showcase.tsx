import { FlatList, ScrollView, StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/i18n/i18next";
import { useState } from "react";
import { usePlayersGet } from "@/hooks/usePlayersGet";
import { TeamCard } from "@/components/Teams";
import { FlashList } from "@shopify/flash-list";

export default function TabTwoScreen() {
  const [text, onChangeText] = useState("");
  const { t } = useTranslation(["showcaseScreen"]);

  const { data } = usePlayersGet();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">FlatList</ThemedText>
      </ThemedView>
      <FlatList
        contentContainerStyle={styles.container}
        horizontal={true}
        data={data?.teams}
        renderItem={({ item }) => <TeamCard team={item} />}
        keyExtractor={(item) => item.tid.toString()}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">FlashList</ThemedText>
      </ThemedView>
      <ThemedView style={styles.flashListWrapper}>
        <FlashList
          contentContainerStyle={styles.container}
          data={data?.teams}
          renderItem={({ item }) => <TeamCard team={item} />}
          horizontal={true}
          inverted={isRTL}
          estimatedItemSize={100}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 32,
  },
  flashListWrapper: {
    flexGrow: 1,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 8,
    paddingHorizontal: 32,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 32,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  rtlInput: isRTL ? { textAlign: "right" } : {},
});
