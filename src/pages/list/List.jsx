import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/data_table/DataTable";
function List({title}) {
  return (
    <div className="list">
      <div id='sidebar' className='visibility'>
        <Sidebar/>
        </div>
      <div className="list_container">
        <Navbar />        
        <DataTable title={title}/>
      </div>
    </div>
  );
}

export default List;
