import React from 'react';
import ProgressBarComponent from './progress-bar';
import Button from 'react-bootstrap/Button'
import './company-market-detail.css';
import Logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faBox, faAt, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

const CompanyMarketDetail = (props) => {
    return <div className='container'>
        <div className='innercontainer'>
            <span>{props.companyDetail.scrip}</span>
            <span className='boldertext'>$ <span className='price'>{props.companyDetail.price}</span></span>
        </div>
        <div className='innercontainer innercontainer1'>
            <img className='logo' src={Logo} alt='Logo'></img>
        </div>
        <div className='innercontainer innercontainer2' >
            <span><FontAwesomeIcon icon={faBox} />&nbsp;Quantity&emsp;<span className='alight-right boldertext'>{props.companyDetail.quantity}</span></span>
            <span><FontAwesomeIcon icon={faAt} />&nbsp;Avg. Cost&emsp;<span className='alight-right boldertext'>{props.companyDetail.avgCost}</span></span>
            <span><FontAwesomeIcon icon={faMoneyBillWave} />&nbsp;Invested Amt&emsp;<span className='alight-right boldertext'>{props.companyDetail.investedAmount}</span></span>
        </div>
        <div className='innercontainer innercontainer3' >
            <span className='boldertext'>Market Value&emsp;${props.companyDetail.price * props.companyDetail.quantity}</span>
            <span>% of portfolio value&emsp;<span className='boldertext'>{props.companyDetail.percentageOfPortfolioVal}%</span></span>
            <ProgressBarComponent type='positiveBar' value={props.companyDetail.percentageOfPortfolioVal}></ProgressBarComponent>
        </div>
        <div className='innercontainer innercontainer2' >
            <span className='boldertext'>Unrealized P/L&emsp;${props.companyDetail.unrealizedPL}</span>
            <span>% Return&emsp;{props.companyDetail.percentageReturn >= 0 ? <FontAwesomeIcon icon={faCaretUp} color="green" /> : <FontAwesomeIcon icon={faCaretDown} color="red" />} <span className='boldertext'>{Math.abs(props.companyDetail.percentageReturn)}%</span></span>
            <ProgressBarComponent type='positiveAndNegativeBar' value={props.companyDetail.percentageReturn}></ProgressBarComponent>
        </div>
        <div className='innercontainer' >
            <span> <Button className='button' variant="outline-danger">BUY</Button></span>
            <span><Button className='button' variant="outline-danger">SELL</Button></span>
        </div>
    </div>;
}

export default CompanyMarketDetail;