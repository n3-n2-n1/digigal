import React from 'react';
import './Collections.css';
import colle1 from "../../../../public/imgs/Collections/collection1.png"
import colle2 from "../../../../public/imgs/Collections/collection2.png"
import colle3 from "../../../../public/imgs/Collections/collection3.png"
import colle4 from "../../../../public/imgs/Collections/collection4.png"
import colle5 from "../../../../public/imgs/Collections/collection5.png"
import colle6 from "../../../../public/imgs/Collections/collection6.png"
import colle7 from "../../../../public/imgs/Collections/collection7.png"
import colle8 from "../../../../public/imgs/Collections/collection8.png"




function Collections() {
    return (
                    <div className='bg-black'>
                    <section className="container bg-black content-space-2 content-space-lg-3" id="projects">
                        <div className="container wow fadeInUpSmall" data-wow-duration="2s" data-wow-delay=".2s">

                        <div className="row content-space-b-lg-1">
                            <h1 id="team_title" className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s">#top Collection<span className="selected-whitebg">Sales</span></h1>

                            <div className="containerF">
                            <div className="row justify-content-center">
                                <div className="col-sm-4 col-md-12 mb-5 d-flex justify-content-center">
                                <button type="button" className="btnProject btn-primary filter" data-filter="all">All</button>
                                <button type="button" className="btnProject btn-primary filter" data-filter=".web">Last day</button>
                                <button type="button" className="btnProject btn-primary filter" data-filter=".app">1 week</button>
                                <button type="button" className="btnProject btn-primary filter" data-filter=".games">1 Month</button>
                                </div>
                            </div>
                            </div>

                            <div className="container">
                            <div className="wrap-projects">
                                <div className="gallery-project">
                                <div className="col-6 col-md-3 mb-4 mix web app" href="#">
                                    <div className="inside">
                                    <img src={colle1} alt="Infinix Soft" />
                                    </div>
                                </div>

                                    
                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle2} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                    
                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle3} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                    
                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle4} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                    
                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle5} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle6} alt="Infinix Soft" />
                                        </div>
                                    </div>


                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle7} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-3 mb-4 mix web appmix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle8} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-3 mb-4 mix web app mix  web app" href="#" >
                                        <div className="inside">
                                            <img src={colle8} alt="Infinix Soft" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Collections





