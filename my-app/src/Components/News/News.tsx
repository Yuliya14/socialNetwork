import  React from 'react'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const News = () => {
    return <div>News</div>
}
const NewsWithAuthRedirect = WithAuthRedirect(News)
export default NewsWithAuthRedirect