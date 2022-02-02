import { Fragment } from "react";

export default function OpenTickets(props) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-lg-4 mt-1">
          <h5>OPEN TICKETS(0)</h5>
        </div>
        <div className="col-lg-2">
          <button className="btn bg-black text-white"> Refresh</button>
        </div>
      </div>
      <div className="row mt-2">
        <small>There are no open tickets at this time</small>
      </div>
    </Fragment>
  );
}
