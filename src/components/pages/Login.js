import React, {useState} from 'react'
import {InputText} from "primereact/inputtext"
import { Button } from 'primereact/button'
import {login} from "../redux/actions/auth.action";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const Login = () => {

  const [username,setUsername] = useState(null);
  const [password,setPassword] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn=()=>{
    if (!username){
      alert('Kullanıcı Adı Boş Olamaz.');
      return;
    }

    if (!username){
      alert('Şifre Boş Olamaz');
      return;
    }

    login({
      username,
      password
    },dispatch,history);
  }

  return (
    <div className='flex align-items-center justify-content-center '>

      <div className='flex flex-column align-items-center w-25rem h-25rem border-round-3xl card'>
        <div className='flex flex-column gap-2 m-3'>
          <span className='p-float-label'>
            <InputText id="username"  onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="username">Kullanıcı Adı</label>
          </span>
        </div>
        <div className='flex flex-column gap-2 m-3'>
          <span className='p-float-label'>
            <InputText id="username" type="password" onChange={(e)=>setPassword(e.target.value)} />
            <label htmlFor="username">Şifre</label>
          </span>
        </div>
        <div className='flex flex-column gap-2 m-3'>
          <Button label="Giriş Yap" className="p-button-rounded p-button-success" onClick={signIn} />
        </div>
      </div>
    </div>
  )
}

export default Login
