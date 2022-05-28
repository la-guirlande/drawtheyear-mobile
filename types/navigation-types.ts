import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

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

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}