import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Counter from './components/Counter';
import MyCart from './components/MyCart';
import { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    // Simulating an API call with setTimeout
    setTimeout(() => {
      // Randomly generate success or failure
      const isSuccessResponse = Math.random() < 0.5;

      if (isSuccessResponse) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }

      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div>
      <Provider store={store}>
        <Counter />
        <h1>My App</h1>
        <MyCart />
      </Provider>

      {isLoading && <div>Request is sending...</div>}
      {isError && <div>Error</div>}
      {isSuccess && <div>SUCCESS</div>}
      
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Sending Request...' : 'Send Request'}
      </button>
    </div>
  );
};

export default App;
