
import './App.css';
import {Button} from "./Components/button/Button";
import User from "./Components/user/User";
import Example from "./Components/example/Example";

function App() {
  return (
      <>
        <Button text={'open'}/>
        <Button text={'close'}/>
        <User name={'Umi'} age={20} fontColor={'red'}/>
        <Example>
            <div>
                <h1>Hello</h1>
                <p style={{
                    color: 'red',
                    fontSize: '20px'
                }}>Hi</p>
            </div>
        </Example>
      </>
  );
}

export default App;
