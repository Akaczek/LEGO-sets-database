import { AppWrapper } from './App.styles';
import { LeftSidePanel, LegoList } from './components';

const App = () => {
  return (
    <AppWrapper>
      <LeftSidePanel />
      <LegoList />
    </AppWrapper>
  );
};

export default App;
