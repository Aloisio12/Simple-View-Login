import './App.css'
import { Input } from './components/Input'
import { User } from '@phosphor-icons/react'
import { Password } from '@phosphor-icons/react'
import { Button } from './components/Button'

export default function App() {
  return(
    <header>
      <Input title='Email'>
        <User size={32}/>
      </Input>

      <Input title='Senha' typeInput='password'>
        <Password size={32}/>
      </Input>

      <Button title='Entrar' colorBackground='white' borderButton='2px solid #000'/>
      </header>
  )
}