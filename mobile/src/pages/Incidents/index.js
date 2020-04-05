import React from 'react';
import { View, FlatList ,Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail(){
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headertextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>

      <FlatList
        style={styles.incidentsList}
        data={[1,2,3,4]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          
          <View style={styles.incident}>

          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>Nome da ong aqui</Text>

          <Text style={styles.incidentProperty}>Descrição:</Text>
          <Text style={styles.incidentValue}>Descrição da ong aqui</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>Valor aqui</Text>

          <TouchableOpacity style={styles.detalisButton} onPress={ navigateToDetail }>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </TouchableOpacity>

        </View>)}
      />

    </View>
    
  );
}
