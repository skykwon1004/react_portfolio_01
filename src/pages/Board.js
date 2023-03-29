import { NAV } from "../data/default";
import SubTitle from "../components/SubTitle";
import { Outlet } from "react-router-dom";


const Board = ({ }) => {
    return (
        <>
            <SubTitle NAV={NAV} idx={1} />
            <Outlet />
        </>
    )
}

export default Board;