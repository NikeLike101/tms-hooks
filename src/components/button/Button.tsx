

interface Props {
    onClick: () => void
    disable: boolean
}

const Button:React.FC<Props> = props => {
    const {disable,onClick} = props

    const handleClick = () => {
        onClick()
    }

    return <button onClick={handleClick} disabled={disable}>Save</button>
}
export default Button