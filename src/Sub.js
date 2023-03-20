import { Outlet } from 'react-router-dom'
import SubTitle from './components/SubTitle'

const Sub = ({ NAV }) => {
    return (
        <>
            <SubTitle NAV={NAV} />
            <Outlet />
        </>
    )
}

export default Sub;