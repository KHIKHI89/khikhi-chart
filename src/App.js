import './App.css';
import Sidebar from './Sidebar';
import { schema } from "./schema";

function App() {
  return (
    <div className="App">
   
     <Sidebar schema={schema} type="Pie"/>
    </div>
  );
}

export default App;
