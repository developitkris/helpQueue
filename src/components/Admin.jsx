import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

function Admin(props){
  console.log(props.currentRouterPath);
  return (
    <div>
      <h2>Admin</h2>
      <TicketDetail />
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.proptypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default Admin;
