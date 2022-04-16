import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const Home = () => {
  return (
    <div className='home'>
        <div id='sidebar' className='sidebar_container visibility'>
        <Sidebar/>
        </div>
        <div className="home_container">
            <Navbar/>
            <div className="widgets">
                <Widget type="users"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
            <div className="list_container box-shadow">
                <div className="list_title">
                    Latest Transaction
                </div>
                <Table/>
            </div>
        </div>
    </div>
  )
}

export default Home