import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import firestore, { firebase } from '@react-native-firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts';

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  NativeBaseProvider,
  Box,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Button,


} from 'native-base';


export default class Customer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Id', 'Name', 'Address', 'Phone'],
      tableData: [
        ['C001', 'Rukshan Maduranga', 'Hettigoda, Hikkaduwa', '0778238651'],
      ],
      id: '',
      name: '',
      address: '',
      phone: '',
      showAlert: false,
    }

    this.saveCustomer = this.saveCustomer.bind(this)

    
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  saveCustomer() {
    firestore()
      .collection('customers')
      .add({
        Id: this.state.id,
        Name: this.state.name,
        Address: this.state.address,
        Phone: this.state.phone
      })
      .then(() => {
        this.showAlert();

        this.setState({
          id: '',
          name: '',
          address: '',
          phone: '',
        })
      });
  }

  
  

  render() {
    const { showAlert } = this.state;

    const state = this.state;
    return (
      <NativeBaseProvider>
        <ScrollView>
          <Box safeArea flex={1} p={2} w="95%" mx="auto">
            <VStack space={2}>
              {/* Customer Added Succeddfull Alert */}
              <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Customer Added...!"
                //   message="I have a message for you!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmButtonStyle={{
                  backgroundColor: 'green',
                  marginLeft: 120,
                  width: 60,
                }}
                confirmButtonTextStyle={{ textAlign: 'center' }}
                //   cancelText="No, cancel"
                confirmText="Ok"
                confirmButtonColor="green"
                onCancelPressed={() => {
                  this.hideAlert();
                }}
                onConfirmPressed={() => {
                  this.hideAlert();
                }}
              />
              {/* ENd Customer Added Succeddfull Alert */}

              <FormControl mt={2}>
                <FormControl.Label
                  _text={{
                    color: 'muted.700',
                    fontSize: 'md',
                    fontWeight: 700,
                  }}>
                  Customer ID
                </FormControl.Label>
                <Input
                  style={{ borderWidth: 2 }}
                  size="sm"
                  placeholder="Enter Customer ID Here"
                  placeholderTextColor="blueGray.400"
                  value={this.state.id}
                  onChangeText={value => {
                    this.setState({
                      id: value,
                    });
                  }}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormControl.Label
                  _text={{
                    color: 'muted.700',
                    fontSize: 'md',
                    fontWeight: 700,
                  }}>
                  Customer Name
                </FormControl.Label>
                <Input
                  style={{ borderWidth: 2 }}
                  size="sm"
                  placeholder="Enter Customer Name Here"
                  placeholderTextColor="blueGray.400"
                  value={this.state.name}
                  onChangeText={value => {
                    this.setState({
                      name: value,
                    });
                  }}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormControl.Label
                  _text={{
                    color: 'muted.700',
                    fontSize: 'md',
                    fontWeight: 700,
                  }}>
                  Customer Address
                </FormControl.Label>
                <Input
                  style={{ borderWidth: 2 }}
                  size="sm"
                  placeholder="Enter Customer Address Here"
                  placeholderTextColor="blueGray.400"
                  value={this.state.address}
                  onChangeText={value => {
                    this.setState({
                      address: value,
                    });
                  }}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormControl.Label
                  _text={{
                    color: 'muted.700',
                    fontSize: 'md',
                    fontWeight: 700,
                  }}>
                  Phone Number
                </FormControl.Label>
                <Input
                  style={{ borderWidth: 2 }}
                  size="sm"
                  placeholder="Enter Customer Phone Number Here"
                  placeholderTextColor="blueGray.400"
                  value={this.state.phone}
                  onChangeText={value => {
                    this.setState({
                      phone: value,
                    });
                  }}
                />
              </FormControl>

              {/* save update delete Btn Group */}
              <Button.Group
                mt={4}
                variant="solid"
                isAttached
                space={6}
                mx={{
                  base: 'auto',
                  md: 0,
                }}>
                <Button
                  onPress={this.saveCustomer}
                  colorScheme="teal"
                  mr={2}>
                  Save
                </Button>
                <Button onPress={this.updateCustomer}
                  colorScheme="info" mr={2}>
                  Update
                </Button>
                <Button colorScheme="danger" _text={{ color: 'white' }}>
                  Delete
                </Button>
              </Button.Group>
              {/* End save update delete Btn Group */}

              {/* Table */}
              <ScrollView>
                <View style={styles.container}>
                  <Table
                    borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row
                      data={state.tableHead}
                      flexArr={[2, 4, 4, 4]}
                      style={styles.head}
                      textStyle={styles.Headertext}
                    />
                    <Rows
                      data={state.tableData}
                      flexArr={[2, 4, 4, 4]}
                      textStyle={styles.text}
                    />
                  </Table>
                </View>
              </ScrollView>

              {/* End Table */}
            </VStack>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 10, },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  Headertext: { margin: 2, fontWeight: '700', alignSelf: 'center' },
  text: { margin: 2 }
  
});