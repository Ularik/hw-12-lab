interface Props {
    message: string;
    date: string;
    author: string;
}

const Message: React.FC<Props> = ({ message, date, author}) => {
  const dateFormat = new Date(date);

    return (
      <div className="card w-25">
        <div className="d-flex justify-content-between p-3">
          <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {dateFormat.toLocaleString("ru-RU")}
          </h6>
        </div>
        <div className="card-body">{message}</div>
      </div>
    );
}

export default Message;