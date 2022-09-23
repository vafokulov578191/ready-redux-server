import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchUsers } from './Components/store/Userthunk';

function App() {
  const users = useSelector(state => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
