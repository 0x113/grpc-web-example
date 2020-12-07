## Setup
Generate code from protocol buffers
```shell
$ cd proto && make && cd ..
```

Setup frontend
```shell
$ cd client && npm install && npx webpack client.js && cd ..
```

Start the project
```shell
$ docker-compose up
```

Visit `localhost:8000` to see the result.
