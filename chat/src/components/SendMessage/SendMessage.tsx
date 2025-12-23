import { useState, type FormEvent } from "react";

const SendMessage = () => {
    const [message, setMessage] = useState('');

    const url = "http://146.185.154.90:8000/messages";
    const postMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim() === '') return
        const data = {
            message: message,
            author: 'Joma'
        }
        const result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        });
        const response = await (result.json());
        console.log(response)
    }
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <form onSubmit={postMessage} action="#">
            <div className="row">
              <div className="col-9">
                <input 
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)} 
                value={message}
                className="form-control" type="text" />
              </div>
              <button className="col-3 btn btn-dark">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default SendMessage;