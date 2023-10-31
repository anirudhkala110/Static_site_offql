import React from 'react'
import hands from './hands.png'
import map from './map.png'
import pig from './pig.png'
import thumbsup from './thumbsup.png'
import ticket from './ticket.png'
import joincord from './joiningcord.png'
import house from './house.png'

const NextPage = () => {
  return (
    <div className='next-page pb-3' >
      <center className='fw-bold pt-5' style={{ color: " #407BFF", fontSize: "45px" }}>
        Why Choose Our Wxyz
        <br />Management Software
      </center>
      <div className='container pt-5 dmore' style={{ marginTop: "30vh" }}>
        <center>
          <img src={joincord} className='cord' />
        </center>
        <div className='  d-flex align-items-center row justify-content-around mt-4' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label className='' style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Teamwork Made Easier</label>
            <div className='' style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={hands} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
        </div>
        <div className='  d-flex align-items-center row justify-content-around mt-4' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={pig} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Budget Friendly</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <div className='  d-flex align-items-center row justify-content-around mt-4' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Higher sales productivity from all your teams</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={house} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
        </div>
        <div className='  d-flex align-items-center row justify-content-around mt-4' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={ticket} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12' >
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Gd-flex align-items-center row justify-content-arounds as Your Business Gd-flex align-items-center row justify-content-arounds</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <div className='  d-flex align-items-center row justify-content-around mt-4' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>From leads to successful sales</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={map} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
        </div>
        <div className='  d-flex align-items-center row justify-content-around mt-4' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={thumbsup} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "100", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>
              Best Support which you desire for
            </label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              If you are looking for the best support, you have come to the right place. We are here to provide you with the assistance you need
            </div>
          </div>
        </div>
      </div>
      <div className='container pt-2 dless' style={{ marginTop: "30vh" }}>
        <div className='  d-flex align-items-center row justify-content-around mt-5' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={hands} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label className='' style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Teamwork Made Easier</label>
            <div className='' style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <hr className='shadow mb-4'/>
        <div className='  d-flex align-items-center row justify-content-around mt-5' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={pig} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Budget Friendly</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <hr className='shadow mb-4'/>
        <div className='  d-flex align-items-center row justify-content-around mt-5' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={house} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Higher sales productivity from all your teams</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <hr className='shadow mb-4'/>
        <div className='  d-flex align-items-center row justify-content-around mt-5' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={ticket} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12' >
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>Gd-flex align-items-center row justify-content-arounds as Your Business Gd-flex align-items-center row justify-content-arounds</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <hr className='shadow mb-4'/>
        <div className='  d-flex align-items-center row justify-content-around mt-5' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={map} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "50", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>From leads to successful sales</label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
        <hr className='shadow mb-4'/>
        <div className='  d-flex align-items-center row justify-content-around mt-5' >
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
            <img src={thumbsup} style={{ maxWidth: " 300px", width: "100%", maxHeight: " 300px", zIndex: "100", filter: "drop-shadow(2px 4px 6px rgb(117 129 151))" }} />
          </div>
          <div className='col-12 col-lg-6 col-sm-12 col-md-12 '>
            <label style={{ color: "#407BFF", fontSize: "30px", fontWeight: "600" }}>
              Best Support which you desire for
            </label>
            <div style={{ fontSize: "18px", fontWeight: "400" }}>
              If you are looking for the best support, you have come to the right place. We are here to provide you with the assistance you need
            </div>
          </div>
        </div>
        <hr className='shadow mb-4'/>
      </div>
      <center> <button className='btn py-3 px-4 mt-3 text-white' style={{ background: " #534AEC" }}>Try it Now <i class="bi bi-arrow-right-circle-fill ms-2"></i></button></center>
    </div>
  )
}

export default NextPage