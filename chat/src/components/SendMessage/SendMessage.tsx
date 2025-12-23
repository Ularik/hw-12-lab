const SendMessage = () => {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <form action="#">
            <div className="row">
              <input className="col-7 form-control" type="text" />
              <button className="col-3 btn btn-dark">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default SendMessage;