import { Tabs, TabList, TabTrigger, TabSlot } from 'expo-router/ui';
import { Text } from './ui/text';
import { View, StyleSheet } from 'react-native';

// Defining the layout of the custom tab navigator
export default function Sidebar() {
  return (
    <Tabs  >
      <TabSlot />
      <TabList style={styles.container} >
        <TabTrigger name="home" href="/">
          <Text>Home</Text>
        </TabTrigger>
        <TabTrigger name="article" href="/article">
          <Text>Article</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
    },
    sidebar: {
      width: 240,
      backgroundColor: '#f4f4f5',
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    tabTrigger: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 5,
      borderRadius: 5,
      backgroundColor: '#e4e4e7',
    },
    content: {
      flex: 1,
    },
    bottomTab: {
      paddingVertical: 10,
      textAlign: 'center',
      backgroundColor: '#f4f4f5',
    },
  });