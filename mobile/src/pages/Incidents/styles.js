import { StyleSheet } from 'react-native';
import Constant from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constant.statusBarHeight +20,
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headertext:{
        fontSize: 15,
        color: '#737380',
    },

    headertextBold:{
        fontWeight: 'bold',
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description:{
      fontSize: 18,
      lineHeight: 24,
      color: '#737380'  
    },
    
    incidentsList:{
        marginTop: 32,
    },
    
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',    
    },

    incidentValue:{
        marginTop:8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detalisButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText:{
        color: '#e02140',
        fontSize: 15,
        fontWeight: 'bold',
    },
    

})