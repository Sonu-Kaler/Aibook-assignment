import './App.css';
import Provider from './Components/Context/Provider';
import Pricing from './Components/Pricing';
function App() {
  return (
    <div className="App">
      <Provider>
        <Pricing/>
      </Provider>
    </div>
  );
}

export default App;
