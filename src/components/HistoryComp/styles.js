import { StyleSheet, Dimensions } from 'react-native'


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '100%',
    height: '100%',
    borderColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginTop: 10
  },
  iconArea: {
    justifyContent: 'center',
    alignItems:'center',
    flex:1
  },
  icon: {
      color: '#CF2A27',
  },
  content: {
    borderWidth: 2,
    borderColor:'lightgray',
    flex: 6,
    flexDirection: 'column',
    margin:4,
    marginLeft:10
  },
  line: {
      flexDirection:'row'
  },
  text: {
      color: '#113f6a',
      margin:2,
      fontWeight: 'bold',
      fontSize: 10
  }

});

export default styles