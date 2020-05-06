import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import CompanyMarketDetail from './company-market-detail';
import Chart from './chart';
import './home-page.css';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchDetails();
    }

    render() {
        return <div className='homepage-container' style={{ display: 'flex', flexDirection: 'row' }}>
            <div className='homepage-innercontainer'>
                {this.props.shareMarketList.map(company => {
                    return <CompanyMarketDetail key={company.scrip} companyDetail={company} />
                })}
            </div>
            <Chart></Chart>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        shareMarketList: state.shareMarketList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetails: () => dispatch(actions.getDetails())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);