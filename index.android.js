import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text,View, TouchableOpacity, ToastAndroid, TextInput } from 'react-native';
import SendSMS from 'react-native-send-sms';

export default class TextSenderAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

      sendSMSFunction() {
        SendSMS.send("9876541230", this.state.text,
          (msg)=>{
            ToastAndroid.show(msg, ToastAndroid.SHORT);
          }
        );
      }
      render() {
        return (
          <View style={styles.container}>
            <TextInput
                    style={{height: 40, width: 200}}
                    placeholder="Type your message here!"
                    onChangeText={(text) => this.setState({text})}
                  />
            <TouchableOpacity style={styles.button} onPress={this.sendSMSFunction.bind(this)}>
              <Text>Send SMS</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      button: {
        padding: 10,
        borderWidth: .5,
        borderColor: '#bbb',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
      }
    });

AppRegistry.registerComponent('TextSenderAndroid', () => TextSenderAndroid);
