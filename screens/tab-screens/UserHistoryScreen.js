import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserHistoryScreen = ({ navigation }) => {
  const [search, setSearch] = React.useState('');

  const data = [
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    { id: '1', name: 'Suzana R.', treatment: 'Heart Failure', date: '10/21/22', status: 'Active', imageUrl: 'https://via.placeholder.com/150' },
    // Add more data here...
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.treatment}>{item.treatment}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <TouchableOpacity>
        <Icon name="chevron-right" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>History</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Active</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>New</Text>
          </View>
        </View>
        <SearchBar
          placeholder="Search..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          lightTheme
          round
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2441C7',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  searchInputContainer: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    height: 40,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 2,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  treatment: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  status: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
});

export default UserHistoryScreen;