import {ActivityIndicator} from 'react-native';

export const FooterComponent = ({isLoadingMore}: {isLoadingMore: boolean}) => {
  return isLoadingMore ? <ActivityIndicator /> : null;
};
