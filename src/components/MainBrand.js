import '../css/MainBrand.scss';

export const MainBrand = ({ SECTION, BRAND_ITM }) => {
    return (
        <section className="MainBrand">
            <div className="inner sec">
                <h2>{SECTION[0].title}</h2>

                <div className='MainBrand_itm'>
                    {
                        BRAND_ITM.map((it, idx) => {
                            return (
                                <ul className={`bg${idx}`}>
                                    <li className='title'>{it.title}</li>
                                    <li className='number'>{it.number}</li>
                                    <li className='desc'>{it.desc}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MainBrand;