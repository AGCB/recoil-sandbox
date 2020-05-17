// the power that I see being offered is a hook similar to useState
// with the upgrade of being able to be used by multiple components
//
//
//
//


/*
This hook will be `useRecoilState` for state and `useRecoilValue` for derived state
Atoms being for state and Selectors being for derived.

Core Concept of the ATOM...

const fontSizeState = atom()     // the atom function.
it takes an object with key and default keys.
key value must be ( globally ) unique among all atoms and selectors.
const fontSizeState = atom({
  key:'fontSizeState',
  default:14,
});

then a component reads and writes to an atom with useRecoilState

function fontButton() {
  const [ fontSize, setFontSize ] = useRecoilState(fontSizeState);

  then here we add a button with onClick running setFontSize.
  we also set the Style attribute to be {{fontSize}}... but that part makes no sense to me...
  we didn't define font-size: 14px...

  <button onClick={() => {
  setFontSize(fontSize+1)
  }} style={{fontSize}}></button>

  }

they are suggesting that we could now also define a Text Component that can use
the same recoilState..

function Text(){
const [fontSize, setFontSize ] = useRecoilState(fontSizeState);

return (
  <p style={{fontSize}}>This text will increase in size too... </p>
)
}
again.. this feels strange that we are using style without a keyvaluePair that
matches to a css selector...
the atom has a key of "fontSizeState"... how does that match to "font-size" or "height"?


 */
//
//
//
//
//
/*
Core Concept of SELECTOR.
- pure function;
- takes atoms or other selectors as input.
- any changes upstream to deps with trigger rerender of subscribed components
-
- we use a selector function.
const fontSizeLabelState = selector({
  key:'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState) // you see here we get our state.
    const unit = px;
    // here we see our derived data... its just a concat but it works to showoff.
    return `${fontSize}${unit}`
}
})

then we define a fontButton component.

function fontButton() {
const [fontSize, setFontSize ] = useRecoilState(fontSizeState);
const fontSizeLabel = useRecoilValue(fontSizeLabelState);

return (
  <>
    <div>current font size: ${fontSizeLabel}</div>
    <button onClick={setFontSize(fontSize+1)} style={{fontSize}}>CLICK TO ENLARGE</button>
  </>
)
}

 */
//
//
//
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import './App.css';

function App() {
  const [contrast, setContrast] = React.useState(true);

  return (
    <div className={`app ${contrast? 'light':'dark'}-mode`}>
      <h1>playing-with-recoil</h1>
      //toggle darkMode button
      <button onClick={e => {
          setContrast(!contrast)
        }}>TOGGLE CONTRAST</button>
  </div>
  );
}

export default App;
