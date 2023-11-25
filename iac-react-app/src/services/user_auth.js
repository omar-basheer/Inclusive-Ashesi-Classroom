
export const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('Simulating authentication...');
      // Replace the next line with actual token retrieval logic
      const token = '2342f2f1d131rf12';
      // const token = null;
      console.log('Authentication successful. Token:', token);
      resolve(token);
    }, 250);
  });


  