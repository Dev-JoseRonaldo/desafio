import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import Card from '~/src/components/home/card';
import Header from '~/src/components/home/header';
import Separator from '~/src/components/separator';
import Title from '~/src/components/title';

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
    <View className={'px-2'}>
      <View className={'mb-24 mt-14 w-full justify-center items-center'}>
        <Header />
      </View>
   

      <View>
        <SafeAreaView>
          <Title title='Principais manchetes do dia' />
          <FlatList       
            className='mt-6'
            ItemSeparatorComponent={Separator}
            data={data.articles}
            keyExtractor={(item) => item.url} 
            renderItem={({item}) => <Card item = {item} />}
          />
        </SafeAreaView>
      </View>


    </View>
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
