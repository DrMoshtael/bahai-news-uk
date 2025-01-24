import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Article from '@/components/Article';
import { article1 } from '@/db';

export default function TabTwoScreen() {


  return (
    <Article 
      headline={article1.headline} 
      body={article1.body} 
      date={article1.date}
      letterCode={article1.letterCode}
      downloadLink={article1.downloadLink}
      imageUrl={article1.imageUrl}
      imageCaption={article1.imageCaption}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
