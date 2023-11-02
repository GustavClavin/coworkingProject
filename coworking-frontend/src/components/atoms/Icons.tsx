
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faStar, faBars, faHouse, faPen, faCreditCard, faLocationDot, 
        faUser, faRightFromBracket, faEnvelope, faUtensils, faDumbbell, 
        faMugHot, faLock, faCommentDots, faXmark, faMedal } from "@fortawesome/free-solid-svg-icons";
import {faCopyright, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {faInstagram, faFacebook, faPinterest, faCcPaypal, faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";


const StarIcon = () => { return (<FontAwesomeIcon icon={faStar} style={{color: "#ffc703",}} />) }

const MenuIcon = () => { return (<FontAwesomeIcon icon={faBars} />) }

const HouseIcon = () => { return (<FontAwesomeIcon icon={faHouse} />) }

const PenIcon = () => { return (<FontAwesomeIcon icon={faPen} />) }

const CreditCardIcon = () => { return (<FontAwesomeIcon icon={faCreditCard} />) }

const PinIcon = () => { return (<FontAwesomeIcon icon={faLocationDot} />) }

const UserIcon = () => { return (<FontAwesomeIcon icon={faUser} />) }

const LogoutIcon = () => { return (<FontAwesomeIcon icon={faRightFromBracket} />) }

const EmailIcon = () => { return (<FontAwesomeIcon icon={faEnvelope} />) }

const FoodIcon = () => { return (<FontAwesomeIcon icon={faUtensils} />) }

const GymIcon = () => { return (<FontAwesomeIcon icon={faDumbbell} />) }

const CoffeeIcon = () => { return (<FontAwesomeIcon icon={faMugHot} />) }

const LockIcon = () => { return (<FontAwesomeIcon icon={faLock} />) }

const ReviewIcon = () => { return (<FontAwesomeIcon icon={faCommentDots} />) }

const XIcon = () => { return (<FontAwesomeIcon icon={faXmark} />) }

const CopyrightIcon = () => { return (<FontAwesomeIcon icon={faCopyright} />) }

const InstagramIcon = () => { return (<FontAwesomeIcon icon={faInstagram} />) }

const FacebookIcon = () => { return (<FontAwesomeIcon icon={faFacebook} />) }

const PinterestIcon = () => { return (<FontAwesomeIcon icon={faPinterest} />) }

const MedalIcon = () => { return (<FontAwesomeIcon icon={faMedal} />) }

const ThumbIcon = () => { return (<FontAwesomeIcon icon={faThumbsUp} />) }

const VisaIcon = () => { return (<FontAwesomeIcon icon={faCcVisa} />) }

const MastercardIcon = () => { return (<FontAwesomeIcon icon={faCcMastercard} />) }

const PaypalIcon = () => { return (<FontAwesomeIcon icon={faCcPaypal} />) }
  
  export {StarIcon, MenuIcon, HouseIcon, PenIcon, CreditCardIcon, PinIcon, 
          UserIcon, LogoutIcon, EmailIcon, FoodIcon, GymIcon, CoffeeIcon, 
          LockIcon, ReviewIcon, XIcon, CopyrightIcon, InstagramIcon, FacebookIcon,
          PinterestIcon, MedalIcon, ThumbIcon, PaypalIcon, MastercardIcon, VisaIcon }