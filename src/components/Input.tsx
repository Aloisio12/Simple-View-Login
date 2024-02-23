import './Input.css'
import { ReactNode } from 'react'

type inputProps = {
    title: string,
    children?: ReactNode
    typeInput?: string
}

export function Input({title, children, typeInput}: inputProps) {
    return (
        <div id="container">
            {children}
            <input type={typeInput} placeholder={title}/>
        </div>
    )
}