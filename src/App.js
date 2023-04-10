import React, { useEffect, useState } from 'react'

// import { stockOptions, fetchData } from './fetchData'
// import { IgrFinancialChart } from 'igniteui-react-charts';
// import { IgrFinancialChartModule } from 'igniteui-react-charts';

// IgrFinancialChartModule.register();

const App = () => {
  // const [data, setData] = useState([])
  // const [news, setNews] = useState([])
  // const [chartData, setChartData] = useState([])
  
  // const handleData = async() =>{
  //   const response = await fetch(`https://api.twelvedata.com/time_series?symbol=AAPL,MSFT,TSLA,META,AMZN&interval=1day&apikey=fc8e2d7c7326415a8e316a8d6a6e853d`)
  //   const jsonData = await response.json()
  //   setData(jsonData)

  //   const dataStock = jsonData.AAPL.values
  //   setChartData(dataStock)
  //   console.log(dataStock)

  //   const newsResponse = await fetch(`https://api.marketaux.com/v1/news/all?symbols=META&filter_entities=true&language=en&api_token=B5mW9vJouRK0TaElXbCLDHClfjEIMP3WWUWr9fkx`)
  //   const data = await newsResponse.json()
  //   setNews(data.data)
  // }

  

  return (
    <>
        {/* <div>
            <div onClick={handleData}>
              click
            </div>
            <div>
              {
                Object.keys(data).map(key => (
                  <div key={key} style={{display: 'flex', width: '100%'}}>
                    <div>
                        <h3>{key}</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>Time</th>
                              <th>Open</th>
                              <th>Close</th>
                              <th>High</th>
                              <th>Low</th>
                              <th>Volume</th>
                            </tr>
                          </thead>
                            <tbody>
                              {data[key].values.map((item, idx)=>(
                                  <tr key={idx}>
                                      <td>{item.datetime}</td>
                                      <td>{item.open}</td>
                                      <td>{item.close}</td>
                                      <td>{item.high}</td>
                                      <td>{item.low}</td>
                                      <td>{item.volume}</td>
                                  </tr>
                              ))}
                            </tbody>
                          </table>
                    </div>
                    <div>


                    <IgrFinancialChart
                      width="500px"
                      height="100%"
                      isToolbarVisible={false}
                      chartType="Candle"
                      chartTitle="S&P 500"
                      titleAlignment="Left"
                      titleLeftMargin="25"
                      titleTopMargin="10"
                      titleBottomMargin="10"
                      subtitle="CME - CME Delayed Price, Currency in USD"
                      subtitleAlignment="Left"
                      subtitleLeftMargin="25"
                      subtitleTopMargin="5"
                      subtitleBottomMargin="10"
                      yAxisLabelLocation="OutsideLeft"
                      yAxisMode="Numeric"
                      yAxisTitle="Financial Prices"
                      yAxisTitleLeftMargin="10"
                      yAxisTitleRightMargin="5"
                      yAxisLabelLeftMargin="0"
                      zoomSliderType="None"
                      dataSource={chartData}
                    />

                    </div>
                  </div>
                ))
              }
            </div>
        </div> 
         
        <div>
           {Object.keys(news).map(key =>{
              return (
                <div key={key}>
                      <h1>{news[key].title}</h1>
                      <p>{news[key].description}</p>
                      <a href={news[key].url} target='_blank'><img src={news[key].image_url}/></a>
                </div>
              )
           })}
        </div> */}
s
    </>
  )
}

export default App







