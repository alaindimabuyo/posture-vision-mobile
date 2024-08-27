import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart, StackedBarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import HeaderWithSearch from '../headers/HeaderWithSearch';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      {/* Header with SearchBar */}
      <HeaderWithSearch navigation={navigation} title="Dashboard" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>User History</Text>
          <LineChart
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
              datasets: [
                {
                  data: [0, 500, 250, 750, 500, 750, 500, 750, 500, 750],
                },
              ],
            }}
            width={screenWidth - 40} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#f7f7f7',
              backgroundGradientTo: '#f7f7f7',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Subscription by Product</Text>
          <StackedBarChart
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
              legend: ['L1', 'L2', 'L3'],
              data: [
                [600, 100, 100],
                [500, 200, 50],
                [400, 300, 100],
                [300, 400, 150],
                [200, 500, 200],
                [100, 600, 300],
                [50, 700, 400],
                [600, 100, 100],
                [400, 200, 50],
                [300, 300, 100],
              ],
              barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
            }}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#f7f7f7',
              backgroundGradientFrom: '#f7f7f7',
              backgroundGradientTo: '#f7f7f7',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>No Data</Text>
          <BarChart
            data={{
              labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
              datasets: [
                {
                  data: [0, 300, 450, 300, 200, 450, 300, 200, 400, 350],
                },
              ],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#f7f7f7',
              backgroundGradientFrom: '#f7f7f7',
              backgroundGradientTo: '#f7f7f7',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
  },
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2441C7',
    textAlign: 'center',
    flex: 1,
    marginLeft: 10,
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
  chartContainer: {
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#28C7FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
});

export default HomeScreen;