import React from 'react';
import PropTypes from 'prop-types';

class MyEmployeeDetailsComponent extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.empid}</p>
                <p>{this.props.empName}</p>
                <p>{this.props.empCompany}</p>
            </div>
        )
    }
}

MyEmployeeDetailsComponent.defaultProps = {
    empCompany: 'DefaultCom'
}

MyEmployeeDetailsComponent.propTypes = {
    empid: PropTypes.number
}

export default MyEmployeeDetailsComponent;
