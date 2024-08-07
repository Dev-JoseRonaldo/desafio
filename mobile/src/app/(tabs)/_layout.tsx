import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { Provider } from 'react-redux';
import store from '~/src/store/store';

export default function TabLayout() {
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: '',
            headerTransparent: true,
            title: 'Home',
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            // headerRight: () => (
            //   <Link href="/modal" asChild>
            //     <HeaderButton />
            //   </Link>
            // ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerTitle: '',
            headerTransparent: true,
            title: 'Search',
            tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          }}
        />
      </Tabs>
    </Provider>
  );
}
