import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import Header from '~/src/components/home/header';

import Api from '~/src/services/api';
import { ArticleProps } from '~/src/types/article';

interface DataProps {
  status: string,
  totalResults: string,
  articles: ArticleProps[]
}

export default function Home() {
  const [data, setData] = useState({} as DataProps);

  async function getApiData() {
    try {
      const url = `/v2/top-headlines?country=br&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`;
      const response = await Api.get(url);
      setData(response.data);
    } catch(e) {
      console.error(e);
    }
  }

  useEffect(() => {getApiData()}, []);

  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>

      <View>
        <SafeAreaView>
          <Text>Lista</Text>
          <FlatList 
            data={data.articles}
            keyExtractor={(item) => item.url} 
            renderItem={({item}) => <Text className={'py-8'}>{item.author}</Text>}
          />
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 24,
  },
});
