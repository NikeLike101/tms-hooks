import React, {FC} from 'react'

interface Props{
    onClick: (photoId: number) => void
    value: number
}

const PhotoPicker: FC<Props> = props => {
    const {value, onClick} = props
    const handleClick =() => {
        onClick(value)
    }
    return <div onClick={handleClick}>{value}</div>
}

export default PhotoPicker