import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '~/src/store/store';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchHistoric() {
  const searchHistory = useSelector((state: RootState) => state.search.history);

  const showHistory = searchHistory.length > 0;
  return (
    <View className={`${showHistory ? 'block' : 'hidden'} px-4 pt-3 bg-gray-300/50 w-full`}>
      {searchHistory.length > 0 ? (
        searchHistory.map((item, index) => (   
          <View className='flex-row gap-2'>
            <FontAwesome size={18} color='gray' name='history'/>
          <Text key={index} className='color-gray-600 mb-[10]'>
            {item}
          </Text>
          </View>   
        ))
      ) : null }
    </View>
  )
}
