import { React, useState } from 'react';
import SlideShow from '../Components/SlideShow/SlideShow';
import ItemsCarousel from 'react-items-carousel';

import Card from '../Components/Card/Card';
import CarouselCard from '../Components/Carousel Card/CarouselCard';
import './CSS/HomePage.css';
import Product from '../Components/Product/Product';

const HomePage = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <div>
            <SlideShow />
            <div className="item__show">
                <Card title="Revamp your home in style">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg" description="Bedsheets, curtains & more" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg" description="Home decoration" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg" description="Home storage" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg" description="Lighting solutions" />
                </Card>
                <Card title="Top picks for your home">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" description="ACs" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" description="Refrigerators" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" description="Microwaves" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" description="Washing machines" />
                </Card>
                <Card title="Professional tools, testing & more">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg" description="Professional tools" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg" description="Measuring Instruments" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg" description="Cleanign Supplies" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg" description="Medical Supplies" />
                </Card>
                <Card title="Automotive essentials | Up to 60% off">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" description="Cleaning accessories" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" description="Tyre & rim care" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" description="Helmets" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" description="Vacuum cleaner" />
                </Card>
            </div>
            <div className="item__show__carousel">
                <h3>Up to 40% off | Refurbished activity trackers</h3>
                <ItemsCarousel
                    infiniteLoop={false}
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={60}
                    disableSwipe={true}
                    alwaysShowChevrons={false}
                    numberOfCards={8}
                    slidesToScroll={6}
                    outsideChevron={false}
                    showSlither={false}
                    firstAndLastGutter={false}
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    rightChevron={<button>{">"}</button>}
                    leftChevron={<button>{"<"}</button>}
                >
                    <CarouselCard src="https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61BOk+NPOhL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/31x-J+tVmgS._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61RdLS1lGBL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/51FBkjkNmES._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/71s6oBrx7DL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61UVyBbjcCL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/7169je4u88L._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61eenQ6rFPL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61f-B-uQI2L._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/51ToMhOMj+L._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/715H19Jsp-L._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/51JSLD7dCML._AC_SY200_.jpg" />
                </ItemsCarousel>
            </div>
            <div className="item__show">
                <Card title="Shop by Category">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg" description="Fresh" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" description="Mobiles" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" description="Fashion" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" description="Electronics" />
                </Card>
                <Card title="Styles for Men | Up to 70% off">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/1-min._SY116_CB666463598_.jpg" description="Clothing" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg" description="Footwear" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/4-min._SY116_CB666463598_.jpg" description="Watches" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg" description="Bags & luggage" />
                </Card>
                <Card title="Upgrade your home | Amazon Brands & more">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg" description="Smart LED TVs" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_la_186x116_186x116_in-en._SY116_CB663888095_.jpg" description="Appliances" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_furn_186x116_372x232_in-en._SY116_CB663888090_.jpg" description="Furniture" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_kitchen_186x116_186x116_in-en._SY116_CB663888093_.jpg" description="Kitchen products" />
                </Card>
                <Card title="Up to 30% off | Snacks & beverages">
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/December/BTF_QCs/Fresh_HUB/Package_Food/PC/Biscuits__Snacks1x_01._SY116_CB651569883_.jpg" description="Biscuits & snacks" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/December/BTF_QCs/Fresh_HUB/Package_Food/PC/Beverages1x_02._SY116_CB651569883_.jpg" description="Beverages" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/December/BTF_QCs/Fresh_HUB/Package_Food/PC/Noodles__Pasta1x_03._SY116_CB651569883_.jpg" description="Noodles & Pasta" />
                    <Product src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/December/BTF_QCs/fresh_logo1x._SY116_CB651711931_.jpg" description="Explore all offers" />
                </Card>
            </div>
            <div className="item__show__carousel">
                <h3>Up to 65% off | Refurbished laptops</h3>
                <ItemsCarousel
                    infiniteLoop={false}
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={60}
                    disableSwipe={true}
                    alwaysShowChevrons={false}
                    numberOfCards={5}
                    slidesToScroll={4}
                    outsideChevron={false}
                    showSlither={false}
                    firstAndLastGutter={false}
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    rightChevron={<button>{">"}</button>}
                    leftChevron={<button>{"<"}</button>}
                >
                    <CarouselCard src="https://m.media-amazon.com/images/I/61tVa-8RXUL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61KxLULGvBL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61WHZI9MxfL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/41EWtmOblNL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/81PbdgPzrjL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/71Cck7PZooL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/71dG2zTOI6L._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/31TMBp0B8jL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/71C41fSti6L._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/71BmiD1dzWL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/51BWw9fnsCL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61gz6yarchL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/41xx-Vx9vhL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/51iZigI2+ZS._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61NQ1VKjcHL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/616Wfk6L9VL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/61Tub0QI5FL._AC_SY200_.jpg" />
                    <CarouselCard src="https://m.media-amazon.com/images/I/71Y1msHuSSL._AC_SY200_.jpg" />
                </ItemsCarousel>
            </div>
        </div>
    )
}

export default HomePage
