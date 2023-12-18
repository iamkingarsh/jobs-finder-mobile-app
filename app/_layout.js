import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack screenOptions={
    {headerLargeTitle: true,
        headerStyle: {
          backgroundColor: '#f4511e',
          
        },
        headerTitleStyle: {
            color: '#fff',
            },
        headerTintColor: '#fff',
        headerLargeTitleShadowVisible: true,
        headerLargeTitleStyle: {
            color: '#fff',
            },
    }
  } />;
}
