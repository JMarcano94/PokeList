import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 1,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 135,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
    flex: 1,
  },
  subtitle1: {
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 10,
  },
  subtitle2: {
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    marginLeft: 10,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  absoluteView: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  imagePerfil: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 150,
    height: 150,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
