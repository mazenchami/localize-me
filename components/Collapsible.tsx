import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { isRTL } from '@/i18n/i18next';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  const arrowStyle = useAnimatedStyle(() => {
    const rtlAdjustment = isRTL ? -1 : 1;
    const rotateValue = rtlAdjustment * (isOpen ? 90 : 0);
    const rotateDegree = `${rotateValue}deg`;

    return {
      transform: [{ rotate: withTiming(rotateDegree) }],
    };
  });

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Animated.View style={arrowStyle}
          pointerEvents={isOpen ? "auto" : "none"}>
          <Ionicons
            name={isRTL ? 'chevron-back-outline' : 'chevron-forward-outline'}
            size={18}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />
        </Animated.View>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginStart: 24,
  },
});
