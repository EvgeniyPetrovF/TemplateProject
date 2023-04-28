import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../../../../models/navigation';
import {styles} from './styles';

type Props = StackScreenProps<StackParamList, 'Home'>;

const HomeScreen: FC<Props> = () => {
  return <SafeAreaView style={styles.container} />;
};

export default HomeScreen;
