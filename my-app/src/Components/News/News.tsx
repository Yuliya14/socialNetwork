import  React from 'react'
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const News = React.memo(() => {
    return <div>News</div>
})
const NewsWithAuthRedirect = WithAuthRedirect(News)
export default NewsWithAuthRedirect