import React, {useState} from "react";
import style from "../../People/People.module.css";

type PaginatorPropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalItemsCount: number
    countUsersOnPage: number
}
const Paginator = (props: PaginatorPropsType ) => {
    let portionSize = 10
    let pages = []
    let countPages = Math.ceil(props.totalItemsCount / props.countUsersOnPage)
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(countPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(p => <span key={p} className={props.currentPage === p ? style.currentPage : ""}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}> {p} </span>)}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}
export default Paginator