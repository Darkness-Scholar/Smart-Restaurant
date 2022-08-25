import { useState } from "react"
import { motion } from "framer-motion"
import { GiMeat } from "react-icons/gi"
import { GoPlus } from "react-icons/go"
import { MdPayment } from "react-icons/md"
import { FaRegUserCircle } from "react-icons/fa"
import { IoFastFoodSharp, IoWine } from "react-icons/io5"
import "./../styles/Modal.css"
import Payment from "./Payment"

interface Props {
    setShowModal: (value: boolean) => void
}

export default function Modal({ setShowModal }: Props) {

    const [fullScreen, setFullScreen] = useState<boolean>(false)

    return <div style={{ padding: `${fullScreen ? "0" : "40px 65px 75px 65px"}` }} className="rs-overlay">
        <motion.div drag className="rs-modal">
            <div className="rs-modal-body">
                <div className="rs-modal-left">
                    <div className="rs-modal-top">
                        <div className="rs-btns">
                            <button onClick={() => setFullScreen(!fullScreen)} className="fs-btn"></button>
                            <button onClick={() => setShowModal(false)} className="cl-btn"></button>
                        </div>
                        <h4></h4>
                    </div>


                    <div className="rs-modal-left-content">

                        <h5 className="rs-text">Đã chọn:</h5>

                        <div className="rs-cart-item">
                            <div><GiMeat className="rs-cart-item-icon" />
                                <span>Thịt chó</span></div>
                            <span>200.000đ</span>
                        </div>
                        <div className="rs-cart-item">
                            <div><IoFastFoodSharp className="rs-cart-item-icon" />
                                <span>Bánh mỳ</span></div>
                            <span>15.000đ</span>
                        </div>
                        <div className="rs-cart-item">
                            <div><IoWine className="rs-cart-item-icon" />
                                <span>Rượu</span></div>
                            <span>25.000đ</span>
                        </div>
                        <br />
                        <div className="gach" />
                        <div className="rs-cart-item">
                            <div><GoPlus className="rs-cart-item-icon" />
                                <span>Tổng thiệt hại</span></div>
                            <span>245.000đ</span>
                        </div>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(/img/asdasd.jpg)` }} className="rs-modal-right">
                    <div className="rs-modal-right-header text-white">
                        <MdPayment className="rs-border" />
                        <h6 className="hehehe">THANH TOÁN</h6>
                        <div className="rs-user-zone">
                            <FaRegUserCircle className="rs-user-zone-icon" />
                            <span className="rs-user-zone-name">User Name</span>
                        </div>
                    </div>

                    <div className="rs-modal-right-content">
                        <Payment />
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
}