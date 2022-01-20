
import { LogBox } from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';

LogBox.ignoreAllLogs()

const App = () => {

  return (
    <StackNavigation />
  );
}

export default App;