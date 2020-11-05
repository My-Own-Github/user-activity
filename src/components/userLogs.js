import React from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import { Card, Button } from 'react-bootstrap'

const columns = [
    {
        name: 'First NAME',
        selector: 'firstName',
        sortable: true,
        wrap: true,
        center: true,
    },
    {
        name: 'Last Name',
        selector: 'lastName',
        sortable: true,
        wrap: true,
        center: true,
    },
    {
        name: 'Phone No',
        selector: 'phoneNumber',
        sortable: true,
        wrap: true,
        center: true,
    },
    {
        name: 'Address',
        selector: 'Address',
        sortable: true,
        wrap: true,
        center: true,
    }
];

const customStyles = {
    rows: {
        style: {
            // minHeight: '72px', // override the row height
        }
    },
    headCells: {
        style: {
            background: "#d3d3d3",
            textAlign: "center"
        },
    },
    cells: {
        style: {
            textAlign: "center"
            // height: '40px',
            // paddingLeft: '5px', // override the cell padding for data cells
            // paddingRight: '5px'
        },
    },
};

class UserLogs extends React.Component {
    constructor(props) {
        super(props)
        this.userLogsLS = JSON.parse(localStorage.getItem('userLogsList')) 
    }

    componentDidMount = async () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className="mt-3 mb-3">
                    <div id="details" className="card">
                        <DataTable
                            // sortIcon={sortIcon}
                            title="User Logs"
                            columns={columns}
                            data={this.props.userLogs? this.props.userLogs : this.userLogsLS}
                            responsive="true"
                            highlightOnHover
                            center={true}
                            customStyles={customStyles}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userLogs: state.userActivity?.userList,
    }
}

export default connect(mapStateToProps, null)(UserLogs);