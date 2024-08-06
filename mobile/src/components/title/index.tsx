import { View, Text } from 'react-native'

interface TitleProps {
  title: string
}

export default function Title({ title,  }: TitleProps) {
  return (
    <View>
      <Text className={'leading-6 font-extrabold text-2xl color-gray-800'}>{title}</Text>
    </View>
  )
}