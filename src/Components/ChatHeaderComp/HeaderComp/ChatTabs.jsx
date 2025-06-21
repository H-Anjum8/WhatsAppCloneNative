import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatTabs = () => {
    const [activeTab, setActiveTab] = React.useState('all');

  const renderContent = () => {
    switch (activeTab) {
      case 'all':
        return <Text>All Chats Content</Text>;
      case 'unread':
        return <Text>Unread Chats Content</Text>;
      case 'favorites':
        return <Text>Favorite Chats Content</Text>;
    }
  };
  return (
   <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('all')}>
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('unread')}>
          <Text style={styles.tabText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => setActiveTab('favorites')}>
          <Text style={styles.tabText}>Favorites</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>{renderContent()}</View>
    </View>
  )
}

export default ChatTabs

const styles = StyleSheet.create({})