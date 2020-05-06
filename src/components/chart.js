import React from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

const Chart = (props) => {

    const getData = () => {
        let mutualfund = 0;
        let etf = 0;
        props.shareMarketList.forEach(companyDetail => {
            if (companyDetail.type === 'MF') {
                mutualfund = mutualfund + companyDetail.percentageOfPortfolioVal;
            } else if (companyDetail.type === 'ETF') {
                etf = etf + companyDetail.percentageOfPortfolioVal;
            }
        });
        return [mutualfund, etf];
    }

    const data = () => {
        return {
            labels: ['Mutual Funds', 'ETFs'],
            datasets: [
                {
                    backgroundColor: [
                        '#04DEE7',
                        '#D47804'
                    ],
                    hoverBackgroundColor: [
                        '#00B8C0',
                        '#A96004'
                    ],
                    data: getData()
                }
            ]
        }
    }

    return <div>
        <Doughnut
            data={data}
            options={{
                title: {
                    display: true,
                    text: 'Portfolio',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            }}
        />
    </div>
}

const mapStateToProps = state => {
    return {
        shareMarketList: state.shareMarketList
    }
}

export default connect(mapStateToProps)(Chart);