import React, { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { YStack, XStack, Text } from 'tamagui'
import GradientHeading from '../../../../components/GradientHeading/GradientHeading'
import Course from '../../../../components/Course/Course'
import Utils from '../../../../Utilities/Utilities'
import { CourseGetAllAction } from '../../../../api/Course/CourseAction'
import { ResponseCourseApiType } from '../../../../api/types/ResponseCourseApiType'

const PopularCourses = () => {
  const Utilities = new Utils()
  const isDark = Utilities.isDark()

  // 🧠 State management
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const limit = 10

  // ✅ Fetch Courses from API
  const fetchCourses = async (pageNum: number, reset = false) => {
    if (!hasMore && !reset) return
    setLoading(true)

    const query = `fields=title,description,instructor,featuredImage,price,sale,category,enrolledStudents,languages,createdAt,type,rated,reviews&type=single&limit=${limit}&page=${pageNum}`

    CourseGetAllAction({
      query,
      onSuccess: (res: ResponseCourseApiType) => {
        setCourses((prev) => (reset ? res.response : [...prev, ...res.response]))

        const loaded = pageNum * res.limit
        setHasMore(loaded < res.total)
        setLoading(false)
      },
      onFailed: () => setLoading(false),
    })
  }

  // 🔁 Fetch on first load + when page changes
  useEffect(() => {
    fetchCourses(page)
  }, [page])

  // ✅ Infinite scroll logic for horizontal ScrollView
  const handleScroll = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
    if (contentOffset.x + layoutMeasurement.width >= contentSize.width - 200 && !loading && hasMore) {
      setPage((prev) => prev + 1)
    }
  }

  return (
    <YStack pt={30} pb={30} px={20} style={{ backgroundColor: isDark ? 'black' : 'white' }}>
      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center">
        <GradientHeading>Popular Courses</GradientHeading>
        <Text color={isDark ? 'white' : '#3B5998'} fontSize={15}>
          View More
        </Text>
      </XStack>

      <Text color={isDark ? 'white' : '#999'} mt={5}>
        In-demand Courses
      </Text>

      {/* Horizontal ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {courses.map((course, idx) => (
          <Course key={idx} isDark={isDark} course={course} />
        ))}

        {/* Loading Indicator */}
        {loading && <ActivityIndicator size="small" color="#888" style={{ marginLeft: 15 }} />}
      </ScrollView>
    </YStack>
  )
}

export default PopularCourses
