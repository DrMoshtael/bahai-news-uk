import { SafeAreaView } from 'react-native';

import NewsFeed from '@/components/NewsFeed'

export default function TabOneScreen() {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <NewsFeed />
    </SafeAreaView>
  )
}