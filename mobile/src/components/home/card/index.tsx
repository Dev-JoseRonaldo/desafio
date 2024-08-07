import { View, Text, Linking, TouchableOpacity } from 'react-native'

import { ArticleProps } from '~/src/types/data'
import { timeForNow } from '~/src/utils/dateFormater'

export default function Card({item}: { item: ArticleProps }) {
  const dateAgo = timeForNow(item.publishedAt)
  return (
    <TouchableOpacity 
      onPress={() => Linking.openURL(item.url)} 
      className={'mt-2 rounded-lg p-2 py-4 w-full cursor-pointer'}
    >
      <Text className='font-bold text-2xl'>{item.title}</Text>

      <View className='flex-row justify-between align-middle w-full mt-6'>
        <Text className={'pt-6 font-semibold text-gray-500'}>{item.author}</Text>
        <Text className={'pt-6  font-semibold text-gray-500'}>{dateAgo}</Text>
      </View>
    </TouchableOpacity>
  )
}