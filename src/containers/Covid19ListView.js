import React,{Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

class Covid19ListView extends Component{
    
    state = {
        columnDefs: [{
            headerName: "State", field: "State"
          }, {
            headerName: "Confirmed", field: "Confirmed"
          },{
            headerName: "", field:"DeltaConfirmed"
          },
          {
            headerName: "Active", field: "Active"
          },
          {
            headerName: "Recovered", field: "Recovered"
          },{
            headerName: "", field: "DeltaRecovered"
          },
          {
            headerName: "Death", field:"Deaths"
          },
          {
            headerName: "", field: "DeltaDeaths"
          }
        ],
        rowData:null,
    }
    
    componentDidMount() {
            axios.get('http://corona-ind-19-20.herokuapp.com/api/')
                .then(result => result.data)
                .then(rowData => this.setState({rowData}))
                .catch(err => console.log(err));
        }
    

    
    render() {
        return(
            <div
                className="ag-theme-alpine"
                style={{
                height: '1000px',
                width: '1200px' }}
            >
                <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        )
    }
}
export default Covid19ListView;