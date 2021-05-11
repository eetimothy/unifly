import image1 from '../../assets/images/sgtourcard1.png'
import image2 from '../../assets/images/sgtourcard2.png'
import image3 from '../../assets/images/sgtourcard3.png'

import { Row, Col } from 'antd'
import { Card } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

// const { Meta } = Card;
// const { useBreakpoint } = Grid;

// const style = {
//     color: 'crimson'
// }


const SgTourCard = () => {
    // const { md } = useBreakpoint()
    return (
        <>
            <div className="title-container">
                <div className="card-title">
                    <h2>Singapore Tours</h2>
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
                            <div className="custom-image">
                                <img alt="example" width="100%" src={image1} />
                            </div>
                            <div className="custom-card">
                                <div className="custom-card-title">
                                <h3>4D3N Singapore Garden City Tour</h3>
                                </div>
                                <div className="custom-card-price">
                                    <span>$1,688.00</span>
                                </div>
                                <div className="custom-card-description">
                                <p>Join our classic Singapore journey and experience the unique charm of Garden City in the 4-day trip.</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            hoverable
                            style={{ width: 240 }}
                            bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={image2} />
                            </div>
                            <div className="custom-card">
                                <div className="custom-card-title">
                                <h3>3D2N Singapore Family Adventure Tour</h3>
                                </div>
                                <div className="custom-card-price">
                                    <span>$1,099.00</span>
                                </div>
                                <div className="custom-card-description">
                                <p>Discover the fun and awesome things to do in Singapore, from shopping to exploring to feasting on local cuisine.</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                    <Card
                            hoverable
                            style={{ width: 240 }}
                            bodyStyle={{ padding: 0 }}>
                            <div className="custom-image">
                                <img alt="example" width="100%" src={image3} />
                            </div>
                            <div className="custom-card">
                                <div className="custom-card-title">
                                <h3>3D2N Resorts Workd Sentosa Exploration & Staycation</h3>
                                </div>
                                <div className="custom-card-price">
                                    <span>$2,688.00</span>
                                </div>
                                <div className="custom-card-description">
                                <p>Enjoy comprehensive world-class attractions and experience dining, facilities...</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="left-arrow">
                        <RightOutlined />
                </div>
            </div>
            <div className="card-footer">
            <div className="explore-more">
                    <button>Explore more</button>
                </div>
                </div>
        </>
    );
}

export default SgTourCard;