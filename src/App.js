import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
function App() {
  return (
    <>
    <Navbar title="TextUtils"  />
    <div className="container my-3">
      <Form heading="Enter the text to analyze below"/>
    </div>
    </>
  );
}
export default App;