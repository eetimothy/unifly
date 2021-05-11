// import image1 from '../../assets/images/hotel_booking.png'
import image2 from '../../assets/images/travel_visa.png'
// import image3 from '../../assets/images/bus_tickets.png'

import { Row, Col, } from 'antd'
import { Card } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

// const { Meta } = Card;
// const { useBreakpoint } = Grid;

// const style = {
//     color: 'crimson'
// }


const TravelServices = () => {
    // const { md } = useBreakpoint()
    return (
        <>
            <div className="title-container">
                <div className="card-title">
                    <h1>Travel Services</h1>
                </div>
               
            </div>
            <div className="container-card">
                <div className="left-arrow">
                <LeftOutlined />
                </div>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col>
                    <Card
                            hoverable
                            style={{ width: 240 }}
                            bodyStyle={{ padding: 0 }}>
                            <div className="card-image">
                                <img alt="example" width="100%" src={image2} />
                            </div>
                            <div className="custom-card">
                                <div className="custom-card-title">
                                <h2>Hotel Bookings</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            hoverable
                            style={{ width: 240 }}
                            bodyStyle={{ padding: 0 }}>
                            <div className="card-image">
                                <img alt="example" width="100%" src={image2} />
                            </div>
                            <div className="custom-card">
                                <div className="custom-card-title">
                                <h2>Travel Visa</h2>
                                </div>
                                
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            hoverable
                            style={{ width: 240 }}
                            bodyStyle={{ padding: 0 }}>
                            <div className="card-image">
                                <img alt="example" width="100%" src={image2} />
                            </div>
                            <div className="custom-card">
                                <div className="custom-card-title">
                                <h2>Bus Tickets</h2>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="left-arrow">
                        <RightOutlined />
                </div>
            </div>
        </>
    );
}

export default TravelServices;