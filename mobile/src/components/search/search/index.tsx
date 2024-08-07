import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

interface SearchProps {
  HandleSearchArticlesByKeyWord: (text: string) => void;
}

export default function Search({HandleSearchArticlesByKeyWord}: SearchProps) {
  const [text, setText] = useState('');

  return (
    <View className='px-4 flex-row justify-between items-center gap-[4px] min-h-[40px]'>
      <TextInput 
        placeholder='Palavra-chave' 
        className='text-sm px-2 rounded border-2 border-solid border-gray-400 w-full py-[4px]'
        value={text}
        onChangeText={(text) => setText(text)}
        />

        <TouchableOpacity 
          className='cursor-pointer bg-gray-700 rounded h-full items-center' 
          onPress={() => HandleSearchArticlesByKeyWord(text)}
        >
          <Text className='color-white p-3 text-sm'>Buscar</Text>
        </TouchableOpacity>   
    </View>
  )
}