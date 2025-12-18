import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name as any);
          }
        };

        const iconName = () => {
          switch (route.name) {
            case 'Home': return isFocused ? 'home' : 'home-outline';
            case 'Profile': return isFocused ? 'person' : 'person-outline';
            case 'Settings': return isFocused ? 'settings' : 'settings-outline';
            default: return 'ellipse';
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={1}
          >
            {/* Floating icon if focused */}
            <View style={isFocused ? [styles.floatingIcon, { backgroundColor: colors.primary }] : undefined}>
              <Ionicons
                name={iconName() as any}
                size={28}
                color={isFocused ? '#fff' : colors.text}
              />
            </View>

            {/* Label */}
            {!isFocused && (
              <Text style={{ color: colors.text, fontSize: 12, marginTop: 4 }}>
                {typeof options.tabBarLabel === 'function'
                  ? options.tabBarLabel({
                      focused: isFocused,
                      color: colors.text,
                      position: 'below-icon' as any,
                      children: route.name as any,
                    })
                  : options.tabBarLabel ?? route.name}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    ...Platform.select({ ios: { paddingBottom: 10 } }),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  floatingIcon: {
    position: 'absolute',
    top: -20, // icon floats above the bar
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
