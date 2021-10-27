import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Card from './components/Card';

interface User {
  name: string;
  hobby: string;
  age: number;
}

function App() {

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>('');
  const [users, setUsers] = useState<User[]>([] as User[]);

  const handleClick = (name: string, age:number, hobby:string) => {
    const user = { name, age, hobby }
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <main className="App-header">
        <h2>Cadastre usuário</h2>
        <label>Nome</label>
        <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder={'Nome'}/>
        <label>Idade</label>
        <Input type={'number'} value={age} onChange={(e)=>setAge(Number(e.target.value))} placeholder={'Idade'}/>
        <label>Hobby</label>
        <Input value={hobby} onChange={(e)=>setHobby(e.target.value)} placeholder={'Hobby'}/>
        <button style={{ padding: '5px', backgroundColor: 'black', color:'white', marginTop: '5px', fontWeight: 'bold', cursor:'pointer' }} onClick={()=> handleClick(name, age, hobby)}>Enviar</button>
        <ul style={{ display: 'flex', flexWrap:'wrap', listStyle: 'none' }}>
          {users.map((userr, index)=>{
            return(
              <li style={{ padding: '10px', border: '1px white solid' }} key={index}>
                <Card hobby={userr.hobby} name={userr.name} age={userr.age}/>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
