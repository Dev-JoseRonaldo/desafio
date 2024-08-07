import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import Search from '~/src/components/search/search';
import api from '~/src/services/api';

interface DataProps {
  status: string,
  totalResults: string,
}

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
      setData(response.data);
      console.log(data);
      } catch(e) {
        console.error(e);
      }
  }

  return (
    <>
      <View className='bg-white flex-1 items-center p-6 pt-20'>
        <Search HandleSearchArticlesByKeyWord={HandleSearchArticlesByKeyWord}/>      
      </View>
    </>
  );
}
