export const mockApi = {
    login: (email, password) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            user: {
              id: 1,
              email,
              name: 'John Doe',
            },
          });
        }, 1000);
      });
    },
  
    signup: (email, password) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            user: {
              id: 2,
              email,
              name: 'Jane Doe',
            },
          });
        }, 1000);
      });
    },
  
    getMessages: (roomId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            messages: [
              { id: 1, sender: 'John', message: 'Hello there!' },
              { id: 2, sender: 'Jane', message: 'Hi, how are you?' },
            ],
          });
        }, 1000);
      });
    },
  
    sendMessage: (roomId, message) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: {
              id: 3,
              sender: 'Jane',
              message,
            },
          });
        }, 1000);
      });
    },
  };
  