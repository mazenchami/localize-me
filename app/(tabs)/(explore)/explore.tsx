import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Trans, useTranslation } from 'react-i18next';
import { isRTL } from '@/i18n/i18next';

export default function TabTwoScreen() {
  const { t } = useTranslation(["exploreTab"]);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={[styles.headerImage, styles.rtlIcon]} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t("title")}</ThemedText>
      </ThemedView>
      <ThemedText><ThemedText>{t("subtitle")}</ThemedText></ThemedText>
      <Collapsible title={t("fileBasedRouting.title")}>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="fileBasedRouting.description1"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="fileBasedRouting.description2"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">{t("learnMore")}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t("androidIosWeb.title")}>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="androidIosWeb.description"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
      </Collapsible>
      <Collapsible title={t("images.title")}>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="images.description"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">{t("learnMore")}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t("customFonts.title")}>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="customFonts.description"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
              spaceMono: <ThemedText style={{ fontFamily: "SpaceMono" }} />,
            }}
          />
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">{t("learnMore")}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t("lightDarkMode.title")}>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="lightDarkMode.description"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">{t("learnMore")}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t("animations.title")}>
        <ThemedText>
          <Trans
            ns="exploreTab"
            i18nKey="animations.description1"
            components={{
              semiBold: <ThemedText type="defaultSemiBold" />,
            }}
          />
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              <Trans
                ns="exploreTab"
                i18nKey="animations.description2"
                components={{
                  semiBold: <ThemedText type="defaultSemiBold" />,
                }}
              />
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  rtlIcon: isRTL ? { transform: [{ scaleX: -1 }] } : {},
});
