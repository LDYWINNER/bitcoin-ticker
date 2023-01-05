import styled from "styled-components";

const Overview = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 40px;
    border-radius: 10px;
    margin-bottom: 20px;
`;
const OverviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
};

interface PriceProps {
    coinId: string;
    tickersData?: PriceData;
};


function Price({ coinId, tickersData }: PriceProps) {
    return (
        <>
            <Overview>
                <OverviewItem>
                    <h4>Price:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>${tickersData?.quotes.USD.price.toFixed(2)}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>ath date:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.ath_date}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>ath price:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.ath_price}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>market cap:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.market_cap}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>market cap change 24h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.market_cap_change_24h}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 12h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_12h}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 15m:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_15m}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 1h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_1h}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 1y:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_1y}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 24h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_24h}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 30d:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_30d}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 30m:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_30m}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent change in 6h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_change_6h}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>percent from price ath:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.percent_from_price_ath}%</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>volume in 24h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.volume_24h}</span>
                </OverviewItem>
            </Overview>
            <Overview>
                <OverviewItem>
                    <h4>volume change in 24h:</h4>
                </OverviewItem>
                <OverviewItem>
                    <span>{tickersData?.quotes.USD.volume_24h_change_24h}%</span>
                </OverviewItem>
            </Overview>
        </>
    )
}

export default Price;