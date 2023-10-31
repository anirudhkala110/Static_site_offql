import React from 'react'
import bg from '../Component/bg.jpeg'
import NextPage from './NextPage'
import 'bootstrap/js/dist/collapse.js'

const Frontpage = () => {
    return (
        <>

            <div className='frontpage py-4'>

                <div className='container my-5 px-5'>
                    <div className=' header border shadow'>
                        <div className='dmore w-100 border'>
                            <nav class="navbar navbar-expand-lg my-3 navbar-white bg-white px-3 w-100 d-flex align-items-center">
                                <a class="navbar-brand" href="#">
                                    <div className='logo_facebook'>
                                        Facebook
                                    </div>
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto ms-3 w-100 d-flex justify-content-between align-items-center">
                                        <li class="nav-item active" style={{
                                            color: "#0A0B3B",
                                            fontFamily: "Inter"
                                        }}>

                                            Products

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            solution

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Industries

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Industries

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Pricing

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Resource

                                        </li>
                                        <li class="nav-item active py-3 btn btn-primary" style={{
                                            color: "white",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Book a Demo

                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className='dless'>
                            <nav class="navbar navbar-expand-lg my-3 px-2 navbar-white bg-white w-100 d-flex justify-content-between">
                                <a class="navbar-brand" href="#">
                                    <div className='logo_facebook'>
                                        Facebook
                                    </div>
                                </a>
                                <button class="navbar-toggler ms-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto w-100">
                                        <li class="nav-item active" style={{
                                            color: "#0A0B3B",
                                            fontFamily: "Inter"
                                        }}>

                                            Products

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            solution

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Industries

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Industries

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Pricing

                                        </li>
                                        <li class="nav-item active" style={{
                                            color: "#A4A4A4",
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Resource

                                        </li>
                                        <li class="nav-item active py-3 w-100 text-white btn btn-primary" style={{
                                            cursor: "pointer",
                                            fontFamily: "Inter"
                                        }}>

                                            Book a Demo

                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                    <div className='dboth my-5 justify-content-between align-items-center'>
                        <div className='left m-1 mb-3' style={{ maxWidth: "550px" }}>
                            <span className=''>
                                <div className='leads_mag fs-5 px-2 d-flex align-items-center' style={{maxWidth:"370px",width:"auto" }}>
                                    <div className='' style={{ width: "20px", background: "#d3dbe3", height: "20px" }}></div>
                                    Leads Management
                                </div>
                                <div className='fw-bold fs-1' style={{ color: "#3B3A5D" }}>
                                    Welcome to your
                                    <div className='' style={{ color: "#407BFF" }}>
                                        Facebook.
                                    </div>
                                </div>
                                <div className='text-black' style={{ fontSize: "18px", color: "black" }}>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </div>
                                <button className='btn py-3 px-4 mt-3 text-white' style={{ background: " #534AEC" }}>Try it Now <i class="bi bi-arrow-right-circle-fill ms-2"></i></button>
                            </span>
                        </div>
                        <div className='right m-1 mb-3' style={{ maxWidth: "550px" }}>
                            <img src={bg} className='rounded-5' style={{ maxWidth: "500px", maxHeight: "500px", width: "100%" }} />
                        </div>
                    </div>
                </div >
            </div >
            <NextPage />
        </>
    )
}

export default Frontpage
