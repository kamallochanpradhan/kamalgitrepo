import React from 'react';
import MyEmployeeDetailsComponent from './MyEmployeeDetailsComponent';
class MyEmployeeComponent extends React.Component{
    render(){
        var employeDetail={
            empid:'101',
            empName:'Pradhan',
            empCompany:'Yash'
        }
        return(
            <div>
                <MyEmployeeDetailsComponent empid={employeDetail.empid} empName={employeDetail.empName} />
            </div>
        )
    }
}

export default MyEmployeeComponent;