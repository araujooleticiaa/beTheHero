import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';
import logoImg from '../../assets/logo.png';


export default function Detail() {

  const navigation = useNavigation();
  const message = 'ola apad, estou entrando em contato pois gostaria de ajudar no caso "adelinha machucadaa"'

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Heroi do caso: cadelinha atropelada',
      recipients: ['leticia@leticia.com'],
      body: message,
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`https://api.whatsapp.com/send?phone=5521998311661`)
  }

  return (
    <View style={styles.container}> 

      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather color="#ea2041" size={20} name="arrow-left" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
      <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>Nome da ong aqui</Text>

          <Text style={styles.incidentProperty}>Descrição:</Text>
          <Text style={styles.incidentValue}>Descrição da ong aqui</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>Valor aqui</Text>
      </View>

      <View style={styles.contactBox}>

        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroí deste caso.</Text>

        <Text style={styles.heroDescription}>Entre em contado:</Text>

        <View style={styles.actions}>

          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText} >Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText} >Email</Text>
          </TouchableOpacity>


        </View>

      </View>


    </View>
  );
}
