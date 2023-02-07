import React from 'react';
import './styles/App.css';
import Routing from './routes/routing';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
}

export default App;
