import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Image, Pressable, FlatList } from 'react-native'
import { YStack, XStack, Text, useTheme } from 'tamagui'
import { Bell, Package } from '@tamagui/lucide-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import SearchInput from '../Form/SearchInput'
import Utils from '../../Utilities/Utilities'
import { RootState } from '../../Redux/Store'

const TopBar = ({onSearch}) => {
  const { user } = useSelector((i: RootState) => i.AuthSlice)
  const { navigate } = useNavigation()
  const route = useRoute()
  const theme = useTheme()
  const Utilities = new Utils()
  const isDark = Utilities.isDark()

  const [currentMenu, setCurrentMenu] = useState('Home')      // 🔸 real active (gold) — derived from route
  const [currentSubMenu, setCurrentSubMenu] = useState('Home')// 🔸 real active submenu (gold)
  const [selectedMenu, setSelectedMenu] = useState('')        // 🔹 temporary selected (blue)

  const linearAutoColor = isDark ? [theme.background.val, theme.background.val] : ['#FFE7A1', '#fff']

  const MenuList = [
    {
      title: 'Home',
      id: 'home',
      Icon: ({ color }) => <MaterialCommunityIcons name="monitor-share" size={22} color={color} />,
      submenus: [
        { title: 'Home', link: 'Home' },
        { title: 'About', link: 'about' },
        { title: 'Faq', link: 'faq' },
      ],
    },
    {
      title: 'Courses',
      id: 'courses',
      Icon: ({ color }) => <Package size={22} color={color} />,
      submenus: [
        { title: 'All Courses', link: 'CoursesScreen' },
        { title: 'Packages', link: 'CoursesPackageScreen' },
      ],
    },
    {
      title: 'Dashboard',
      id: 'dashboard',
      Icon: ({ color }) => <Package size={22} color={color} />,
      submenus: [
        { title: 'Dashboard', link: 'MainScreen' },
        { title: 'My Courses', link: 'MyCourses' },
        { title: 'KYC', link: 'Verification' },
        { title: 'Referrals', link: 'Referrals' },
        { title: 'Wallet', link: 'Wallet' },
        { title: 'Webinar', link: 'Webinar' },
        { title: 'Freelancer', link: 'Freelancer' },
      ],
    },
    {
      title: 'Support',
      id: 'support',
      Icon: ({ color }) => <Package size={22} color={color} />,
      submenus: [
        { title: 'Help Center', link: 'help' },
        { title: 'Chat', link: 'chat' },
      ],
    },
  ]

  const getSubmenu = (v) => MenuList.find(({ title }) => title === v)?.submenus || []

  // 🔹 When route changes, set the real active menu/submenu (gold) and clear temporary selection
  useEffect(() => {
    if (route?.name) {
      for (const menu of MenuList) {
        const matchedSub = menu.submenus.find((s) => s.link === route.name)
        if (matchedSub) {
          setCurrentMenu(menu.title)
          setCurrentSubMenu(matchedSub.title)
          setSelectedMenu('') // clear blue highlight because user navigated
          return
        }
      }
      // optional: if route doesn't match any submenu, you can clear active states
      // setCurrentMenu('')
      // setCurrentSubMenu('')
    }
  }, [route?.name])

  // 🔸 determine which menu's submenu list to show:
  const displayedMenu = selectedMenu || currentMenu

  return (
    <LinearGradient
      colors={linearAutoColor}
      start={{ x: 0.9, y: 0.5 }}
      style={{
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
      }}
    >
      {/* Header */}
      <XStack alignItems="center" justifyContent="space-between">
        <YStack>
          <Text fontSize={22} fontWeight="700" width={200}>
            Hi {user?.fullName}
          </Text>
          <Text fontSize={15} color={isDark ? 'white' : '#444'}>
            Discover new skills with us
          </Text>
        </YStack>

        <XStack alignItems="center" space="$3">
          <Pressable onPress={() => navigate('Notifications')} style={{ position: 'relative', marginRight: 10 }}>
            <Bell size={22} color="#8B8FEB" />
            <View
              style={{
                position: 'absolute',
                right: -2,
                top: -2,
                backgroundColor: '#FF4D4D',
                borderRadius: 6,
                width: 10,
                height: 10,
              }}
            />
          </Pressable>
          <Pressable onPress={() => navigate('ProfileScreen')}>
            <Image
              source={{ uri: user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#ccc',
              }}
            />
          </Pressable>
        </XStack>
      </XStack>

      {/* Search */}
      <SearchInput onSearch={onSearch} />

      {/* Main Menu Tabs */}
      <XStack justifyContent="space-between" mt={25}>
        {MenuList.map(({ id, title, Icon }) => {
          const isActive = currentMenu === title              // gold: actual active based on route
          const isSelected = selectedMenu === title && !isActive // blue: temporary selection
          const color = isActive ? '#C49000' : isSelected ? '#007BFF' : isDark ? 'white' : '#000'

          return (
            <Pressable
              key={id}
              onPress={() => {
                // only set temporary selection so it stays blue until real navigation happens
                setSelectedMenu(title)
                // show the submenu of this parent (without marking it active/golden)
                // we don't change currentMenu here — that must come from route change
              }}
              style={{ alignItems: 'center' }}
            >
              {Icon({ color })}
              <Text mt={4} fontWeight="600" color={color}>
                {title}
              </Text>
            </Pressable>
          )
        })}
      </XStack>

      {/* Submenu Tabs (based on displayedMenu) */}
      <FlatList
        data={getSubmenu(displayedMenu)}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => {
          const isActive = currentSubMenu === item.title
          const color = isActive ? '#C49000' : isDark ? 'white' : '#444'

          return (
            <Pressable
              onPress={() => {
                // navigate -> route change -> useEffect will set currentMenu/currentSubMenu and clear selectedMenu
                navigate(item.link)
              }}
            >
              <Text
                fontWeight="600"
                color={color}
                style={{
                  borderBottomWidth: isActive ? 2 : 0,
                  borderColor: '#C49000',
                  paddingBottom: 4,
                }}
              >
                {item.title}
              </Text>
            </Pressable>
          )
        }}
      />
    </LinearGradient>
  )
}

export default TopBar
