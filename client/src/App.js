import logo from './logo.svg';
import './App.css';
import { GreeterClient } from '../proto/service_pb'
import { post, feed } from '../proto/service_grpc_web_pb';

const URL = "http://" + window.location.hostname + ":8080";
const client = new GreeterClient(URL, null, null);

const metadata = { 'custom-header-1': 'value1' };

const sayHello = (name, callback) => {
  const request = new HelloRequest();
  request.setName(name);
  client.sayHello(request, metadata, callback);
}

const sayRepeatHello = ({ name, count }) => {
  const streamRequest = new RepeatHelloRequest();
  streamRequest.setName(name);
  streamRequest.setCount(count);
  return client.sayRepeatHello(streamRequest, metadata);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
