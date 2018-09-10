import { StyleSheet, Dimensions } from 'react-native'


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderColor: 'transparent',
    flexDirection: 'column',
    borderBottomWidth: 1,
    marginTop: 4
  },
  imageContainer: {
    backgroundColor: 'skyblue',
    height: 200,
    margin: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch'  ,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'column',
    margin: 10,
  },
  textHeader: {
    fontSize: 16,
  },
  textBody: {
    marginTop: 5,
    fontSize: 12,
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  news: {
    color: '#3763A1',
    marginLeft: 10,
  }
});

export default styles