import { useState } from "react"
import Modal from "./Modal"
import "./../styles/Footer.css"

export default function Footer(){

    const [showModal, setShowModal] = useState<boolean>(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center">

    { showModal && <Modal setShowModal={setShowModal}/> }
    <div className="row">
      <div className="col selected">
        <a href="home.html" className="text-danger small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-home text-danger" /></p>
          Home
        </a>
      </div>
      <div className="col">
        <a href="most_popular.html" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-map-pin" /></p>
          Trending
        </a>
      </div>
      <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
        <div className="bg-danger rounded-circle mt-n0 shadow">
          <a onClick={toggleModal} className="footer-button text-white small font-weight-bold text-decoration-none">
            <i className="feather-shopping-cart" />
          </a>
        </div>
      </div>
      <div className="col">
        <a href="favorites.html" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-heart" /></p>
          Favorites
        </a>
      </div>
      <div className="col">
        <a href="profile.html" className="text-dark small font-weight-bold text-decoration-none">
          <p className="h4 m-0"><i className="feather-user" /></p>
          Profile
        </a>
      </div>
    </div>
  </div>
}