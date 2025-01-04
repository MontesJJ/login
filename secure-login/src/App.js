import './App.css';
import SecureLogin from './components/SecureLogin';
import { GeneratePass } from './components/GeneratePass';

function App() {
  return (
    <div className="App">
      <h1>LOGIN</h1>
      <SecureLogin />
      <GeneratePass />
    </div>
  );
}

export default App;
