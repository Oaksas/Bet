import { Fragment, useEffect, useState } from "react";
import axios from "axios";
export default function OpenTickets(props) {
  const [openTickets, setOpenTickets] = useState([]);
  const openTicket = () => {
    try {
      axios
        .get(
          "https://virtual-bet-frontend.herokuapp.com/api/ticket/opentickets/"
        )
        .then((response) => {
          setOpenTickets(response.data);
        });
    } catch (e) {
      setOpenTickets([]);
    }
  };
  useEffect(() => {
    openTicket();
  }, []);
  return (
    <Fragment>
      <div className='row'>
        <div className='col-lg-4 mt-1'>
          <h5>OPEN TICKETS({openTickets.length}) </h5>
        </div>
        <div className='col-lg-2'>
          <button className='btn bg-black text-white'> Refresh </button>
        </div>
      </div>
      <div className='row mt-2'>
        {openTickets.length === 0 ? (
          <small>There are no open tickets at this time</small>
        ) : (
          openTickets.map((ticket) => {
            <small>ticket</small>;
          })
        )}
      </div>
    </Fragment>
  );
}
