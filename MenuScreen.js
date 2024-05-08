import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const menuItems = {
    food: [
      { id: 'f1', title: 'Pizza', price: 10 },
      { id: 'f2', title: 'Burger', price: 5 },
      { id: 'f3', title: 'Pasta', price: 8 },
      { id: 'f4', title: 'Salad', price: 7 }
    ],
    beverages: [
      { id: 'b1', title: 'Coke', price: 2 },
      { id: 'b2', title: 'Coffee', price: 3 },
      { id: 'b3', title: 'Tea', price: 1.5 },
      { id: 'b4', title: 'Juice', price: 4 }
    ]
  };

  const [orders, setOrders] = useState([]);

  const handleAddToOrder = (item) => {
    
	//Complete handleAddToOrder function
	
	
	
	
	
	
	
	
  };

  const renderMenuItem = ({ item }) => (
    //Complete renderMenuItem function
	
	
	
	
	
	
	
	
	
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food</Text>
      <FlatList
        data={menuItems.food}
        keyExtractor={item => item.id}
        renderItem={renderMenuItem}
      />
      <Text style={styles.header}>Beverages</Text>
      <FlatList
        data={menuItems.beverages}
        keyExtractor={item => item.id}
        renderItem={renderMenuItem}
      />
      <Button
        title="View Order"
        onPress={() => navigation.navigate('Order', { orders })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'lightgray'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20
  }
});

export default MenuScreen;