import { StyleSheet, Dimensions } from 'react-native'


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderColor: 'transparent',
    flexDirection: 'column',
    marginTop: 4,
  },
  imageContainer: {
    height: 100,
    margin: 2,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'stretch'  ,
    width: '100%',
    height:100,
    backgroundColor: '#e22222',
    margin:4
  },
  info: {
      flexDirection:'row',
      borderWidth: 2,
      borderColor:'lightgray' ,
      margin:4
  },
  text: {
      color: '#075599'
  }
});

export default styles