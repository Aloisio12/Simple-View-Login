import './Button.css'

type ButtonProps = {
    title: string,
    colorBackground?: string,
    textColor?: string
    borderButton?: string
}

export function Button({title, colorBackground, textColor, borderButton}: ButtonProps) {
    return(
        <button style={{backgroundColor: colorBackground, color: textColor, border: borderButton}}>{title}</button>
    )
}