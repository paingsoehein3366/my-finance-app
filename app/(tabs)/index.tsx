import { TransactionDto } from '@/constants/types';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const transactions = [
  { id: '1', name: 'Groceries', amount: '-$45.90', date: 'Aug 18' },
  { id: '2', name: 'Salary', amount: '+$2,000.00', date: 'Aug 17' },
];

export default function HomeScreen() {
  const renderTransaction = ({ item }: { item: TransactionDto }) => (
    <Card style={styles.transactionCard}>
      <Card.Title
        title={item.name}
        subtitle={item.date}
        left={(props) => <Avatar.Text {...props} label={item.name[0]} />}
        right={() => <Text style={styles.amount}>{item.amount}</Text>}
      />
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome back!</Text>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balance}>$5,420.75</Text>
      </View>

      <View style={styles.summaryContainer}>
        <Card style={styles.summaryCard}>
          <Card.Content>
            <Text>Income</Text>
            <Text style={styles.income}>+$2,500.00</Text>
          </Card.Content>
        </Card>
        <Card style={styles.summaryCard}>
          <Card.Content>
            <Text>Expenses</Text>
            <Text style={styles.expense}>-$1,079.25</Text>
          </Card.Content>
        </Card>
      </View>

      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        style={styles.transactionList}
      />

      {/* <BottomNavigation
        navigationState={{
          index: 0,
          routes: [
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'budget', title: 'Budget', icon: 'chart-pie' },
            { key: 'profile', title: 'Profile', icon: 'account' },
          ],
        }}
        onIndexChange={() => {}}
        renderScene={() => null}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  header: {
    padding: 20,
    backgroundColor: '#4B7BEC',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: { color: 'white', fontSize: 18 },
  balanceLabel: { color: '#d0d0ff', marginTop: 10 },
  balance: { fontSize: 32, color: 'white', fontWeight: 'bold' },

  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  summaryCard: {
    width: '45%',
    elevation: 2,
  },
  income: { color: 'green', fontSize: 18, marginTop: 5 },
  expense: { color: 'red', fontSize: 18, marginTop: 5 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  transactionList: { paddingHorizontal: 10 },
  transactionCard: {
    marginBottom: 10,
  },
  amount: { fontSize: 16, fontWeight: 'bold', marginRight: 20 },
});