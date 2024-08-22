import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useTranslation } from "react-i18next";
import { Ionicons } from "@expo/vector-icons";
import { isRTL } from "@/i18n/i18next";

export default function Layout() {
  const { t } = useTranslation(["exploreTab"]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerLabelStyle: isRTL ? { writingDirection: "rtl" } : {},
          headerLeftContainerStyle: isRTL
            ? {
                transform: [{ scaleX: -1 }],
                alignItems: "flex-end",
              }
            : {},
        }}
      >
        <Drawer.Screen
          name="explore"
          options={{
            drawerLabel: t("title"),
            title: t("title"),
            drawerIcon: ({ color }) => <Ionicons name="code" color={color} />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
