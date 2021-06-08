# Sample project API with Nodejs and Docker
### Install

run docker:
```
 cd nodedock
```
```
 docker-compose up -d node nginx mysql phpmyadmin
```
get into the container:
```
 docker-compose exec workspace bash
```
install dependencies:
```
 npm install
```


### Start application

access phpmyadmin:
- [http://localhost:8081](http://localhost:8081)

credentials:
```
 server mysql
 user root
 password root
```

call localhost in your browser:
- [http://localhost](http://localhost/)