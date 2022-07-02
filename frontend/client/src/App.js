// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from "react";
import Routes from "./components/Routes/index";
import {UidContext} from './components/AppContext';
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";



function App() {

  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect( () => {
    const fetchToken = async () => {
    await axios({
      method : 'get',
      url : `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials : true
    })
    .then((res) => setUid(res.data))
    .catch((err) => console.log('no-token'))

    if(uid) dispatch(getUser(uid))}
    fetchToken();

  }, [uid])

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
