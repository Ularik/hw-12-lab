import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import SendMessage from './components/SendMessage/SendMessage';

const App = () => {
  

  return (
    <>
      <Header/>
      <div className="container">
        <Chat />
        <SendMessage/>
      </div>
    </>
  );
}

export default App;
