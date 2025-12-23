import { useEffect, useState } from "react";
import Message from "./Message/Message";

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const url = "http://146.185.154.90:8000/messages";
    useEffect(() => {
        let interval: number | undefined = undefined;
        const [lastDate, setLastDate] = useState('')

        const fetchData = async () => {
            console.log('Делаем запрос на сервер');
            let localUrl = url;
            if (lastDate) {
                localUrl = `${url}/?datetime=${lastDate}`
            }
            const result = await fetch(localUrl);
            const data = await result.json();
            const newLastDate = data[data.length - 1].datetime;
            
            if (
              lastDate &&
              new Date(newLastDate).getTime() === new Date(lastDate).getTime()
            ) {
            } else {
              const newMessages = [...data].reverse();
              setMessages((prev) => [...prev, ...newMessages].slice(-15));
              setLastDate(newLastDate);
            }
        }
        fetchData();
        interval = setInterval(fetchData, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
      <div
        style={{
          height: "70vh",
        }}
        className="d-flex p-2 flex-column-reverse gap-3 align-items-center overflow-y-scroll"
      >
        {messages.map((message) => (
          <Message
            key={message._id}
            message={message.message}
            date={message.datetime}
            author={message.author}
          />
        ))}
      </div>
    );
}

export default Chat;