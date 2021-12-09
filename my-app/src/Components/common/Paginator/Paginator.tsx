import React from "react";
import style from "../../People/People.module.css";

type PaginatorPropsType = {
    pages: number[]
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}
const Paginator = (props: PaginatorPropsType ) => {
   return <div>
        {props.pages.map(p => <span key={p} className={props.currentPage === p ? style.currentPage : ""}
                                    onClick={() => {props.onPageChanged(p)
                                    }}> {p} </span>).splice(0, 5)}
        <button onClick={() => {
        }}>next
        </button>
    </div>
}
export default Paginator