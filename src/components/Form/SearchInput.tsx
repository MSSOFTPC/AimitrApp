import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Search } from '@tamagui/lucide-icons';
import { Input, XStack } from 'tamagui';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // 🔁 Debounce logic (waits 500ms after user stops typing)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onSearch) {
        onSearch(query.trim()); // param me search value pass
      }
    }, 500);

    return () => clearTimeout(timeout); // cleanup on every re-type
  }, [query]);

  return (
    <View>
      <XStack
        alignItems="center"
        backgroundColor="white"
        borderColor={"#E0E0E0"}
        borderRadius={30}
        paddingHorizontal={16}
        marginTop={20}
        height={46}
      >
        <View style={{ marginRight: 8 }}>
          <Search color={"#BEBEBE"} size={20} />
        </View>

        <Input
          flex={1}
          fontSize={13}
          backgroundColor="transparent"
          borderWidth={0}
          color="grey"
          placeholder="Search ..."
          value={query}
          onChangeText={setQuery}
        />
      </XStack>
    </View>
  );
};

export default SearchInput;
