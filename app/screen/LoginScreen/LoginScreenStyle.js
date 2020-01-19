import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    libg: {
        width:'100%',
        height: '73%',
        
    },

    logobox:{
        width: '43%',
        height: '30%',
        borderRadius: 12,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 30,
        shadowOpacity: 1,
        marginTop: '30%',
        marginLeft: '30%',
        marginBottom: '5%',
        padding: '18%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    logotext:{ 
        width: 100,
        height: 100,
        //fontFamily: "Gotham",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",

        textAlign: "center",
        color: "#ffbb3b"
    },
    moviebutton: {
            width: 30,
            height: 30,
    },
    title: {
        width: '30%',
        height: 30,
        textAlign: "center",
        //fontFamily: "Gotham",
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "left",
        color: "#5a5a5a"
    },
    inputbox : {
        borderRadius: 9,
        width: 285,
        height: 42,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 6,
        shadowOpacity: 1
    },
    heading: {
        width: '100%',
        height: 19,
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        color: "#5a5a5a", 
    }
          
});