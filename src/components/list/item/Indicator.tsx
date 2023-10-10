import React, {memo} from "react";

interface Props {
    isActive: boolean
}
const Indicator:React.FC<Props> = ({isActive}) => {


    return <div style={{
        width: 20,
        height: 20,
        background: isActive ? '#ff0' : '#0ff'}}></div>
}

export default memo(Indicator)