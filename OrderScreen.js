import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderScreen = ({ route }) => {
  const { orders } = route.params || { orders: [] };

  const calculateTotal = () => {
    return orders.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2);
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title} x {item.quantity}</Text>
      <Text>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderOrderItem}
        ListHeaderComponent={() => <Text style={styles.header}>Your Orders</Text>}
        ListFooterComponent={() => (
          <Text style={styles.total}>Total: ${calculateTotal()}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'lightgray'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  }
});

export default OrderScreen;