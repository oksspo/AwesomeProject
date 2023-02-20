import { useState } from 'react';
import { BottomNavigation, Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProjectList from "./src/ProjectList";
import {themeColors} from "./theme";

export default function App() {
  const [index, setIndex] = useState(2);
  const [routes] = useState([
    { key: 'dashboard', title: 'Dashboard', focusedIcon: 'view-dashboard', unfocusedIcon: 'view-dashboard-outline'},
    { key: 'createOrder', title: 'CreateOrder', focusedIcon: 'cart-plus', unfocusedIcon: 'cart-plus'},
    { key: 'projects', title: 'Projects', focusedIcon: 'file-document', unfocusedIcon: 'file-document-outline'},
  ]);

  const theme = {
    ...DefaultTheme,
    colors: themeColors,
  };

  const renderScene = BottomNavigation.SceneMap({
    dashboard: ProjectList,
    createOrder: ProjectList,
    projects: ProjectList,
  });

  return (
      <PaperProvider theme={theme}>
          <BottomNavigation
              navigationState={{ index, routes }}
              onIndexChange={setIndex}
              renderScene={renderScene}
          />
      </PaperProvider>
  );
}

const styles = StyleSheet.create({

});
