import './App.css';
import TableView from './components/TableView';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <h1>Chinook Database Viewer</h1>
  )
};



function App() {
  return (
    <div className="App">
      <Header />
      <TableView />
    </div>
  );
}

export default App;
