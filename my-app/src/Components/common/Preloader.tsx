import React from 'react'
import preloader from "../../assets/Img/preloader.svg";

type PreloaderPropsType = {
    isLoad: boolean
}
const Preloader = (props: PreloaderPropsType) => {
    return <div>{props.isLoad ? <img src={preloader}/> : null}</div>
}
export default Preloader