import * as AiIcons from "react-icons/ai";

export default function TicketCheck(props) {
  return (
    <div>
      <div className="row p-4">
        <div className="col-lg-10"></div>
        <div className="col-lg-2">
          <AiIcons.AiOutlineClose color="black" />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12"> Ticket ID</div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
        </div>
      </div>
    </div>
  );
}
