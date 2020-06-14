import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bdy:{  
        flex:1,
    },
    container:{  
        flex:1,
        alignItems: 'center',
    },
    boxList:{  
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',  
    },  
    box:{
        flex: 1,
        margin: 20,
        backgroundColor: '#fff',
        height: '25%',
        borderWidth: 2,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    boxHead:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
        borderBottomWidth: 2,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    boxHeadTitle:{
        color: '#000',
    },
    boxBdy: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },
    boxFooter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    boxFooterTxtLeft:{
        color: '#000',
        marginLeft: 40,
        marginBottom: 5,
    },
    boxFooterTxtRight:{
        color: '#000',
        marginRight: 40,
        marginBottom: 5,
    },
    blankText:{
        color: '#fff',
    },
  });