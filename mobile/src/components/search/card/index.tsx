import { View, Text, TouchableOpacity, Linking } from 'react-native'

import { ArticleProps } from '~/src/types/data'
import { timeForNow } from '~/src/utils/dateFormater'

export default function Card({item}: { item: ArticleProps }) {
  const dateAgo = timeForNow(item.publishedAt)
  return (
    <>
      {(item?.author && item?.description && item?.publishedAt && item?.url) ?
        <View className={'p-2 py-4 w-full'}>
          <Text className='font-bold text-2xl'>{item?.title}</Text>
          <Text className={' text-gray-500'}>{item?.description}</Text>

          <View className='flex-row justify-between align-middle w-full mt-6'>
            <Text className={'font-semibold text-gray-500'}>{item?.author}</Text>
            <Text className={'font-semibold text-gray-500'}>{dateAgo}</Text>
          </View>

          <TouchableOpacity 
            className='text-blue-500'
            onPress={() => Linking.openURL(item?.url)}
          >
            <Text className='mt-4 font-bold'> 
            Link:&nbsp;
              <Text className='color-blue-500'>{item.url}</Text>
            </Text> 
          </TouchableOpacity>
        </View>
      : null }
    </>
  )
}