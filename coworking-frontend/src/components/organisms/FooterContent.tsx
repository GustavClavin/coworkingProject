import { Facility } from "../../utils/types/interfaces"
import FacilityComponent from "../atoms/FacilityComponent"
import { CopyrightIcon, FacebookIcon, InstagramIcon, PinterestIcon } from "../atoms/Icons"

interface Props {
    facilities: Facility[]
}
const FooterContent = (props: Props) => {
    

  return (

    <section className="footerContent">
        <ul className="content">
            <li>
                <h2 className="h2Rajhadi">CUSTOMERS CHOICE</h2>
                <p>Our customers has spoken, asking us to provide clear information about what facilities a co-working have. 
                We listened and created logos for you, all for you to receive the information in a smooth and fast way with us at CO-Working Bangkok</p>
                <div className="cardBottomDiv">
                    <div className="cardFacilities">
                        {props.facilities.map((facility) => (
                            <FacilityComponent key={String(facility._id) + String(facility.facility)} facility={facility}/>
                        ))}
                    </div>
                </div>    
            </li>
            <li>
                <h2 className="h2Rajhadi">SOCIALS</h2>
                <p className="">Our customers generally likes being socials, therefore some of our places arranges: <br /> <br />
                - Gatherings <br />
                - Afterworks <br />
                - Movienights <br />
                - Pool <br />
                - Pingpong
                </p>
            </li>
            <li>
                <div className="">
                    <h2 className="h2Rajhadi">EXTRAS</h2>
                    <p className="">Free cancelations</p>
                    <p className="">Free bookings</p>
                </div>
                <div className="contact">
                    <h2 className="h2Rajhadi">CONTACT</h2>
                    <p className="">info@coworkingbangkok.com</p>
                </div>
            </li>
        </ul>
        <ul className="footerLinks">
            <li>
                <img src="https://i.imgur.com/3dWjPIn.png" alt="" />
                <img src="https://i.imgur.com/pS1ZA8c.png" alt="" />
            </li>
            <li>
                <p className="copyright"><CopyrightIcon /> CO-WORKING Bangkok 2023</p>
            </li>
            <li>
                <InstagramIcon />
                <FacebookIcon />
                <PinterestIcon />
            </li>
        </ul>
    </section>
    )
}
export default FooterContent