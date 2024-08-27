import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderWithSearch = ({ navigation, title }) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.headerContainer}>
      <Icon
        name="bars"
        size={30}
        color="#2441C7"
        onPress={() => navigation.openDrawer()}
        style={styles.menuIcon}
      />
      <Text style={styles.headerTitle}>{title}</Text>
      {!showSearch && (
        <Icon
          name="search"
          size={24}
          color="#2441C7"
          onPress={toggleSearch}
          style={styles.searchIcon}
        />
      )}
      {showSearch && (
        <SearchBar
          placeholder="Search..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          lightTheme
          round
          onBlur={toggleSearch} // Hide search input when it loses focus
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2441C7',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searchInputContainer: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    height: 40,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});

export default HeaderWithSearch;