import React from 'react';
import Link from 'next/link';

class Banner extends React.Component {
    render() {
        return (
            <div className="main-banner app-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                    <h1>Comparez et économisez en toute simplicité</h1>
                                        <br />
                                        <br />
                                        
                                        <Link href="#" >
                                            <a  className="btn btn-primary" style={{width:"50vh", fontWeight:700}}>Assurance emprunteur</a>
                                        </Link>
                                        <br />
                                        <br />
                                        <Link href="#" >
                                            <a  className="btn btn-primary" style={{width:"50vh"}}>Prêt immobilier</a>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="app-image">
                                        <img src="https://nextland-react.envytheme.com/app/_next/static/images/app-img4-6fd6f318e09edfd5d1294bc644525fd7.png" alt="image" />
                                        <img src="https://nextland-react.envytheme.com/app/_next/static/images/app-img4-6fd6f318e09edfd5d1294bc644525fd7.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src={require('../../images/bg3.png')} alt="bg" />
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape1">
                    <img src={require('../../images/shape1.png')} alt="img" />
                </div>
                <div className="shape2">
                    <img src={require('../../images/shape2.png')} alt="img" />
                </div>
                <div className="shape3">
                    <img src={require('../../images/shape3.png')} alt="img" />
                </div>
                <div className="shape4 rotateme">
                    <img src={require('../../images/shape4.png')} alt="img" />
                </div>
                <div className="shape6">
                    <img src={require('../../images/shape6.png')} alt="img" />
                </div>
                <div className="shape8 rotateme">
                    <img src={require('../../images/shape8.svg')} alt="shape" />
                </div>
                <div className="shape9">
                    <img src={require('../../images/shape9.svg')} alt="shape" />
                </div>
            </div>
        );
    }
}

export default Banner;
