import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Trans, useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { t } = useTranslation(["homeTab"]);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("welcome")}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("step1.title")}</ThemedText>
        <ThemedText>
          <Trans
            ns="homeTab"
            i18nKey="step1.description"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
            values={{
              shortcut: Platform.select({
                ios: "cmd + d",
                android: "cmd + m",
              }),
            }}
          />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("step2.title")}</ThemedText>
        <ThemedText>{t("step2.description")}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t("step3.title")}</ThemedText>
        <ThemedText>
          <Trans
            ns="homeTab"
            i18nKey="step3.description"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
