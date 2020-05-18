/*


 */
import React from 'react';
import TodoListFromDocs from './components/TodoListFromDocs/'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';










// define an atom.
const textState = atom({
  key: 'textState',
  default:'default-text-placeholder',
});











function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
};

function TextInput() {
  const [text ,setText] = useRecoilState(textState);
  const onChange = e => {
    setText(e.target.value);
  }
  return (
    <div style={{"margin":"20px"}}>
      <input
        type="text"
        value={text}
        onChange={onChange}
      />
      <br />
      Echo: {text}
    </div>
  )
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  return <>CharacterCount: {count}</>
}












// define a selector
const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  }
});









function App() {
  const [contrast, setContrast] = React.useState(true);

  return (
    <div className={`app ${contrast? 'light':'dark'}-mode`}>
      <h1>Recoil Sandbox</h1>
      <button
        className="toggle-contrast"
        onClick={e => {
          setContrast(!contrast)
          }}>TOGGLE CONTRAST</button>
      <RecoilRoot>
        <CharacterCounter />
        <TodoListFromDocs />
      </RecoilRoot>
  </div>
  );
}

export default App;
