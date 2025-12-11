import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Linking,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../../../../components/TopBar/TopBar'
import Utils from '../../../../Utilities/Utilities'
import { NotificationType } from '../../../../api/notification/NotificationType'
import { NotificationGetAllAction } from '../../../../api/notification/NotificationAction'

const Notifications = () => {
  const Utilities = new Utils()
  const isDark = Utilities.isDark()

  const [notifications, setNotifications] = useState<Partial<NotificationType>[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setTimeout(() => {
      NotificationGetAllAction({
        query: '',
        onSuccess: (res) => {
          setNotifications(res)
          setLoading(false)
        },
      })
    }, 300)
  }, [])

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const openLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url)
      } else {
        console.warn("Can't open link: ", url)
      }
    } catch (err) {
      console.error('Error opening link:', err)
    }
  }

  const renderItem = ({ item }: { item: any }) => {
    const isExpanded = expanded[item.id]
    const comment = item.message || ''
    const displayComment =
      comment.length > 80 && !isExpanded ? `${comment.slice(0, 80)}...` : comment

    return (
      <View style={[styles.card, { backgroundColor: isDark ? '#1f1f1f' : '#fff' }]}>
        <View style={styles.row}>
          <Image
            source={{ uri: item.featuredImage || item.avatar || 'https://placehold.co/50x50' }}
            style={styles.avatar}
          />
          <View style={{ flex: 1 }}>
            <Text style={[styles.title, { color: isDark ? '#fff' : '#111827' }]}>
              {item.title || 'Untitled Notification'}
            </Text>

            {comment ? (
              <Text style={[styles.comment, { color: isDark ? '#ccc' : '#4B5563' }]}>
                {displayComment}
                {comment.length > 80 && (
                  <Text
                    onPress={() => toggleExpand(item.id)}
                    style={{ color: '#2563EB', fontWeight: '500' }}
                  >
                    {isExpanded ? ' See less' : ' See more'}
                  </Text>
                )}
              </Text>
            ) : null}
          </View>
        </View>

        {item.featuredImage && (
          <Image
            source={{ uri: item.featuredImage }}
            style={styles.notificationImage}
            resizeMode="cover"
          />
        )}

        {/* ✅ Link Button */}
        {item.link ? (
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => openLink(item.link)}
          >
            <Text style={styles.linkText}>Open Link</Text>
          </TouchableOpacity>
        ) : null}

        <Text style={styles.time}>{item.time || ''}</Text>
      </View>
    )
  }

  return (
    <View style={[styles.container, { backgroundColor: isDark ? 'black' : 'white' }]}>
      <TopBar title="Notifications" />
      {loading ? (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 30 }}>
          <ActivityIndicator size={20} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : notifications.length === 0 ? (
        <View style={styles.emptyBox}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4076/4076500.png' }}
            style={styles.emptyImage}
          />
          <Text style={[styles.emptyText, { color: isDark ? '#ccc' : '#4B5563' }]}>
            No notifications yet
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id?.toString()}
          style={{ padding: 20 }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#6B7280',
  },
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    opacity: 0.8,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 4,
  },
  comment: {
    fontSize: 14,
    lineHeight: 20,
  },
  time: {
    alignSelf: 'flex-end',
    color: '#6B7280',
    fontSize: 12,
    marginTop: 6,
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
  notificationImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginTop: 10,
  },
  linkButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
})
