import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addSearchHistory } from '~/src/store/searchSlice';
import { AppDispatch } from '~/src/store/store';
import SearchHistoric from '../searchHistoric';

interface SearchProps {
  HandleSearchArticlesByKeyWord: (text: string) => void;
}

export default function Search({ HandleSearchArticlesByKeyWord }: SearchProps) {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const [textFocused, setTextFocused] = useState(false);

  const handleSearch = () => {
    if (text) {
      dispatch(addSearchHistory(text));
      HandleSearchArticlesByKeyWord(text);
    }
  };

  return (
    <>
      <View className=' px-4 flex-row justify-between items-start gap-[4px] min-h-[40]'>
        <View className='relative w-full'>
          <TextInput 
            placeholder='Palavra-chave' 
            className='text-sm px-2 rounded border-2 border-solid border-gray-400 w-full py-[4px]'
            value={text}
            onChangeText={(text) => setText(text)}
            onFocus={() => setTextFocused(true)}
            onBlur={() => setTextFocused(false)}
          />
          {textFocused ? <SearchHistoric /> : null}
        </View>
        <TouchableOpacity 
          className='cursor-pointer bg-gray-700 rounded align-top' 
          onPress={handleSearch}
          >
          <Text className='color-white p-3 text-sm'>Buscar</Text>
        </TouchableOpacity> 
      </View>  
    </>
  );
}
