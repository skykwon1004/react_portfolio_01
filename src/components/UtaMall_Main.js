import '../css/UtaMall_Main.scss';

const UtaMall_Main = ({ UTA_MALL_P, NAV }) => {
    return (
        <section className="UtaMall_Main inner">
            <h2>{NAV[0].title}</h2>
            <div className="UM_Content">
                <div className="UM_Itm Top">
                    <img src={process.env.PUBLIC_URL + '/assets/UtaMall_Main01.jpg'} />
                    <div className="UM_Itm_Text">
                        <strong>{UTA_MALL_P[0].title}</strong>
                        <p>{UTA_MALL_P[0].desc}</p>
                    </div>
                </div>
                <div className="UM_Itm Bottom">
                    <img src={process.env.PUBLIC_URL + '/assets/UtaMall_Main02.jpg'} />
                    <div className="UM_Itm_Text">
                        <strong>{UTA_MALL_P[1].title}</strong>
                        <p>{UTA_MALL_P[1].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UtaMall_Main;