import React from 'react';
import ReactDOM from 'react-dom';

import './index.sass';

const App = () => {
  return (
    <div styleName="monkey">
      <p>React there!</p>
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
