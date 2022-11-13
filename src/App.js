import React, {useState, useEffect} from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const LOCAL_STORAGE_KEY = "contects"
  const [contects, setContects] = useState([])

  useEffect(() => {
   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if (retriveContacts) setContects(retriveContacts)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contects))
  }, [contects])
  

  const addContecthandlare = (contect) => {
    console.log(contect)
    setContects([...contects,contect])
  }

 
  return (
    <div className='ui container'>
      <Header /> <br/><br/><br/><br/>
      <AddContact  addContecthandlare={addContecthandlare}/> <br/>
      <ContactList contects={contects} />
    </div>
  );
}

export default App;
