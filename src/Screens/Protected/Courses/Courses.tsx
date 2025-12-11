import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import TopBar from '../../../components/TopBar/TopBar'
import Course from '../../../components/Course/Course'
import Utils from '../../../Utilities/Utilities'
import { CourseGetAllAction } from '../../../api/Course/CourseAction'
import FilterCourse from './FilterCourse'
import { LinearGradient } from 'expo-linear-gradient'

const CoursesScreen = () => {
  const Utilities = new Utils()
  const isDark = Utilities.isDark()

  const [courses, setCourses] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState({
    title: 'all',
    slug: 'all',
    _id: 'all',
  })

  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const fetchCourses = useCallback(
    async (pageNum = 1, reset = false) => {
      if (loading) return
      setLoading(true)
      CourseGetAllAction({
        query: `fields=featuredImage,title,instructor,type,price,sale,slug,rated,category&page=${pageNum}&limit=${limit}&search=${search}&category=${
          selectedCategory?.slug === 'all' ? '' : selectedCategory?.slug
        }&types=Single`,
        onSuccess: (res) => {
          setTotal(res.total)
          if (reset) {
            setCourses(res.response)
          } else {
            setCourses((prev) => [...prev, ...res.response])
          }
          setLoading(false)
          setRefreshing(false)
        },
        onError: () => {
          setLoading(false)
          setRefreshing(false)
        },
      })
    },
    [search, selectedCategory, limit, loading]
  )

  // 🔹 Initial or category/search change
  useEffect(() => {
    setPage(1)
    fetchCourses(1, true)
  }, [search, selectedCategory])

  // 🔹 Load more when user reaches end
  const handleLoadMore = () => {
    if (courses.length < total && !loading) {
      const nextPage = page + 1
      setPage(nextPage)
      fetchCourses(nextPage)
    }
  }

  // 🔹 Pull to refresh
  const handleRefresh = () => {
    setRefreshing(true)
    setPage(1)
    fetchCourses(1, true)
  }

  return (
    <LinearGradient
      colors={isDark ? ['black', 'black'] : ['#FFFFFF', '#FFF9E6']}
      style={{ flex: 1 }}
    >
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <TopBar onSearch={(s) => setSearch(s)} />
      <FilterCourse
        selectedCategory={selectedCategory}
        onChangeCategory={(c) => setSelectedCategory(c)}
      />

      <FlatList
        data={courses}
        keyExtractor={({ _id }) => _id}
        numColumns={2}
        contentContainerStyle={{
          padding: 10,
          paddingBottom: 50,
        }}
        renderItem={({ item }) => (
          <Course style={{ width: 160 }} isDark={isDark} course={item} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={
          loading ? (
            <View style={{ padding: 15 }}>
              <ActivityIndicator size="small" color={isDark ? 'white' : 'black'} />
            </View>
          )
          : <></>
        }
      />
    </LinearGradient>
  )
}

export default CoursesScreen
