import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Credentials from './components/credentials/credentials';

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <Credentials />
    </AppContainer>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', './components/credentials', load);
}

load();
