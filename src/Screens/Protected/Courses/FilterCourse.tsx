import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Star } from '@tamagui/lucide-icons';
import { CategoryGetAllAction } from '../../../api/Category/CategoryAuth';

const FilterCourse = ({selectedCategory,onChangeCategory}) => {
  const [categories, setCategories] = useState([]);
  const ratings = [5, 4, 3, 2];

  useEffect(() => {
    CategoryGetAllAction({
      onSuccess: (cat) => {
        // “All” ko sabse pehle add kar rahe hain
        const allCategories = [{ title: 'All', slug: 'all', _id: 'all' }, ...(cat || [])];
        setCategories(allCategories);
      },
    });
  }, []);

  return (
  <View style={{paddingHorizontal:20}}>
      {/* Category Filter */}
      <View style={{ marginBottom: 20 }}>
        {/* <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
          Category
        </Text> */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => {
            const isActive = selectedCategory?._id === cat._id;
            return (
              <TouchableOpacity
                key={cat._id}
                onPress={() => onChangeCategory(cat)}
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 20,
                  marginRight: 10,
                  borderWidth: 1.5,
                  borderColor: isActive ? '#007BFF' : '#CFCFCF',
                  backgroundColor: isActive ? '#007BFF' : '#fff',
                  shadowColor: '#00000040',
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 2,
                }}
              >
                <Text
                  style={{
                    color: isActive ? '#fff' : '#000',
                    fontWeight: '600',
                    fontSize: 11,
                  }}
                >
                  {cat.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Rating Filter */}
      {/* <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
          Rating
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ratings.map((rate) => {
            const isActive = selectedRating === rate;
            return (
              <TouchableOpacity
                key={rate}
                onPress={() => setSelectedRating(rate)}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 20,
                  marginRight: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1.5,
                  borderColor: isActive ? '#007BFF' : '#CFCFCF',
                  backgroundColor: isActive ? '#007BFF' : '#fff',
                  shadowColor: '#00000040',
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 2,
                }}
              >
                <Star
                  size={16}
                  fill={isActive ? '#fff' : '#FFD700'}
                  strokeWidth={0}
                  style={{ marginRight: 6 }}
                />
                <Text
                  style={{
                    color: isActive ? '#fff' : '#000',
                    fontWeight: '600',
                    fontSize: 12,
                  }}
                >
                  {rate}+
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View> */}

      {/* Filter Result Info */}
      {/* <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, color: '#444' }}>Showing results for:</Text>
        <Text style={{ fontWeight: '700', marginTop: 4 }}>
          {categories.find((c) => c._id === selectedCategory)?.title || 'All'} Courses
          {' '}
          {selectedRating ? `with ${selectedRating}+ Stars` : 'with All Ratings'}
        </Text>
      </View> */}
    </View>
  );
};

export default FilterCourse;
