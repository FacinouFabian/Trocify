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
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#D3D3D3',  
    },  
    box:{
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        height: '40%',
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
    circle: {
        zIndex: 1,
        position: 'absolute',
        top: 10,
        width: 65,
        height: 65,
        borderWidth: 0.5,
        borderRadius: 100/2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',
    },
  });