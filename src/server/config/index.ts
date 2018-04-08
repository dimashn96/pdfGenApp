export const config = {

  server: {
    port: 3000,
    path: {
      api: '../../build/server/router',
      angularOutput: '../../build/client',
      angularIndex: '../../build/client/index.html'
    }
  },
  db: {
    name: 'pdf-gen-test',
    uri: 'mongodb://localhost:27017/pdf-gen-test',
    collections: {
      users: 'users'
    }
  }

};
