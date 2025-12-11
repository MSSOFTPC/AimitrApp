import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LessonsTab = () => {
  const [expanded, setExpanded] = useState(0);

  const modules = [
    {
      id: 1,
      title: "Module 1",
      duration: "1hr 30min",
      lessons: [
        { name: "Course Intro", duration: "30min", preview: true },
        { name: "Watch Before Start", duration: "05min", preview: true },
        { name: "Read Before You Start", duration: "30min", preview: true },
      ],
    },
    {
      id: 2,
      title: "Module 2",
      duration: "1hr 30min",
      lessons: [
        { name: "Lesson 1", duration: "45min", preview: false },
        { name: "Lesson 2", duration: "45min", preview: false },
      ],
    },
    {
      id: 3,
      title: "Module 3",
      duration: "1hr 30min",
      lessons: [{ name: "Lesson 1", duration: "1hr", preview: false }],
    },
  ];

  const renderLesson = (lesson, index) => (
    <View key={index} style={styles.lessonRow}>
      <Text style={styles.lessonName}>{lesson.name}</Text>
      <Text style={styles.lessonDuration}>{lesson.duration}</Text>
      {lesson.preview ? (
        <View style={styles.previewButton}>
          <Text style={styles.previewText}>Preview</Text>
        </View>
      ) : (
        <Ionicons name="lock-closed-outline" size={18} color="#999" />
      )}
    </View>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.header}>Course Content</Text>

      {modules.map((module, i) => (
        <View key={module.id} style={styles.moduleContainer}>
          {/* Module Header */}
          <TouchableOpacity
            onPress={() => setExpanded(expanded === i ? null : i)}
            style={styles.moduleHeader}
            activeOpacity={0.7}
          >
            <Text style={styles.moduleTitle}>{module.title}</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{module.duration}</Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          {expanded === i && <View style={styles.divider} />}

          {/* Lessons */}
          {expanded === i && (
            <FlatList
              data={module.lessons}
              renderItem={({ item, index }) => renderLesson(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default LessonsTab;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 16,

    // Shadow
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 12,
  },
  moduleContainer: {
    marginBottom: 10,
  },
  moduleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#3B5BFF",
  },
  badge: {
    backgroundColor: "#F3F5FF",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: "#3B5BFF",
    fontSize: 12,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginBottom: 8,
  },
  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  lessonName: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  lessonDuration: {
    width: 60,
    textAlign: "right",
    fontSize: 13,
    color: "#555",
    marginRight: 10,
  },
  previewButton: {
    backgroundColor: "#EEF1FF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  previewText: {
    fontSize: 13,
    color: "#3B5BFF",
    fontWeight: "600",
  },
});
