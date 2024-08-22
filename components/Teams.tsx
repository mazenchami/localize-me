import { Dimensions, Image, Linking, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import type { TeamAPIProps } from "@/hooks/usePlayersGet";
import { ThemedText } from "./ThemedText";
import { Trans } from "react-i18next";

interface TeamCardProps {
  team: TeamAPIProps;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  const { logoUrl, name, nicknames, websiteUrl } = team;
  return (
    <ThemedView style={styles.teamCard}>
      <ThemedView style={styles.row}>
        <Image height={25} width={25} source={{ uri: logoUrl }} />
        <ThemedText style={styles.header}>{name}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.row}>
        <ThemedText style={styles.paragraph}>
          <Trans
            ns="showcaseScreen"
            i18nKey="website"
            values={{ url: websiteUrl }}
            components={{
              ref: (
                <ThemedText
                  onPress={() => Linking.openURL(websiteUrl)}
                  style={styles.link}
                />
              ),
            }}
          />
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          <Trans
            ns="showcaseScreen"
            i18nKey="nicknames"
            values={{ nicknames: nicknames.join(", ") }}
          />
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
  },
  teamCard: {
    backgroundColor: "white",
    borderColor: "#ccc",
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 8,
    padding: 20,
    marginEnd: 12,
    width: Dimensions.get("window").width * 0.75,
    height: 200,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 8,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
