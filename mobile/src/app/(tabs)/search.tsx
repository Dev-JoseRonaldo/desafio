import React, { useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, View } from 'react-native';

import Card from '~/src/components/search/card';
import Search from '~/src/components/search/search';
import Separator from '~/src/components/separator';
import Title from '~/src/components/title';
import api from '~/src/services/api';

import { DataProps } from '~/src/types/data';

export default function Home() {
  const [data, setData] = useState({} as DataProps);

  async function HandleSearchArticlesByKeyWord(keyword: string) {

    if(!keyword) {
      Alert.alert('Digite uma palavra-chave para buscar');
      return
    }

    try {
      const url = `/v2/everything?q=${keyword}&apiKey=${process.env.EXPO_PUBLIC_API_KEY}`;
      const response = await api.get(url);
      console.log(response);
      setData(response.data);
      console.log(data);
      } catch(e) {
        console.error(e);
      }
  }

  return (
    <View className='h-full bg-white'>
          <SafeAreaView className='bg-white px-2 pt-16'>
            <Title title='Buscar Notícias' />
            <View className='bg-white items-center p-6 pb-1'>
              <Search HandleSearchArticlesByKeyWord={HandleSearchArticlesByKeyWord}/>      
            </View>
              {data.articles ? 
                  <View>
                    <Text className='mb-4 mx-2 text-sm'>{data.totalResults} resultados encontrados</Text>
                    <FlatList  
                      ItemSeparatorComponent={Separator}
                      data={data.articles}
                      keyExtractor={(item) => item.url} 
                      renderItem={({item}) => <Card item = {item} />}
                    />
                  </View>
              : null}
          </SafeAreaView>       
    </View>
  );
}
