import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
bgimg: {
    width:"100%", 
    height:300,
    justifyContent:'flex-end',
    resizeMode:'contain',
},
title:{
    marginLeft:15,
    marginBottom:10,
    fontSize:25,
    fontFamily: 'Georgia',
    fontWeight:'bold',
},
genre:{
    marginLeft:15,
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'Georgia'

},
imdbrate: {
    width:'100%',
    textAlign:'center',
    fontSize: 30, fontFamily: 'Georgia',fontWeight:'bold'

},
plot:{
    margin:15,
    color:'grey',
    textAlign:'center',
    fontFamily: 'Georgia'

}
    
});