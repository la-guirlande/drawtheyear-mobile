import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: { name: string };
  Authentication: undefined;
  Calendar: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type AuthenticationProps = NativeStackScreenProps<RootStackParamList, 'Authentication'>;
export type CalendarProps = NativeStackScreenProps<RootStackParamList, 'Calendar'>;

