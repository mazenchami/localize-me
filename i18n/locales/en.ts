const en = {
  common: {},
  showcaseScreen: {
    title: "Showcase",
    placeholder: "Type here",
    website: "Website: <ref>{{url}}</ref>",
    nicknames: "Nicknames: {{nicknames}}",
  },
  exploreTab: {
    title: "Explore",
    subtitle: "This app includes example code to help you get started.",
    learnMore: "Learn more",
    fileBasedRouting: {
      title: "File-based routing",
      description1:
        "This app has two screens: <semiBold>app/(tabs)/index.tsx</semiBold> and <semiBold>app/(tabs)/explore.tsx</semiBold>",
      description2:
        "The layout file in <semiBold>app/(tabs)/_layout.tsx</semiBold> sets up the tab navigator.",
    },
    androidIosWeb: {
      title: "Android, iOS, and web support",
      description:
        "You can open this project on Android, iOS, and the web. To open the web version, press <semiBold>w</semiBold> in the terminal running this project.",
    },
    images: {
      title: "Images",
      description:
        "For static images, you can use the <semiBold>@2x</semiBold> and <semiBold>@3x</semiBold> suffixes to provide files for different screen densities",
    },
    customFonts: {
      title: "Custom fonts",
      description:
        "Open <semiBold>app/_layout.tsx</semiBold> to see how to load <spaceMono>custom fonts such as this one</spaceMono>.",
    },
    lightDarkMode: {
      title: "Light and dark mode components",
      description:
        "This template has light and dark mode support. The <semiBold>useColorScheme()</semiBold> hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.",
    },
    animations: {
      title: "Animations",
      description1:
        "This template includes an example of an animated component. The <semiBold>components/HelloWave.tsx</semiBold> component uses the powerful <semiBold>react-native-reanimated</semiBold> library to create a waving hand animation.",
      description2:
        "The <semiBold>components/ParallaxScrollView.tsx</semiBold> component provides a parallax effect for the header image.",
    },
  },
  homeTab: {
    title: "Home",
    welcome: "Welcome!",
    step1: {
      title: "Step 1: Try it",
      description:
        "Edit <semiBold>app/(tabs)/index.tsx</semiBold> to see changes. Press <semiBold>{{shortcut}}</semiBold> to open developer tools.",
    },
    step2: {
      title: "Step 2: Explore",
      description:
        "Tap the Explore tab to learn more about what's included in this starter app.",
    },
    step3: {
      title: "Step 3: Get a fresh start",
      description:
        "When you're ready, run <semiBold>yarn reset-project</semiBold> to get a fresh <semiBold>app</semiBold> directory. this will move the current <semiBold>app</semiBold> to <semiBold>app-example</semiBold>.",
    },
  },
  notFound: {
    title: "This screen doesn't exist.",
    link: "Go to home screen!",
  },
};

export default en;
export type Translations = typeof en;
