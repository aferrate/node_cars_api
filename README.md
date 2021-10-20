# Sample project API with Nodejs and Docker
### Install

run docker:
```
 docker-compose up
```

Access phpmyadmin and copy the code of node_cars.sql in sql textbox to create database and table.


### Start application

access phpmyadmin:
- [http://localhost:8081](http://localhost:8081)

credentials:
```
 user root
 password root
```

call localhost in your browser to test if works:
- [http://localhost:3000/api/v1/](http://localhost:3000/api/v1/)


### Endpoints

1. localhost:3000/api/v1/

- no json needed

2. localhost:3000/api/v1/cars/findAll

- no json needed

3. localhost:3000/api/v1/cars/findAllEnabled

- no json needed

4. localhost:3000/api/v1/cars/findBySlug
```
{"slug" : "test1"}
```
5. localhost:3000/api/v1/cars/findById
```
{"id" : 2}
```
6. localhost:3000/api/v1/cars/search

⋅⋅⋅field can have values: mark, model and year
```
{
    "field" : "mark",
    "search" : "t"
}
```
7. localhost:3000/api/v1/cars/create
```
{
    "mark": "test3",
    "model": "test3",
    "description": "test3test3test3",
    "slug": "test3",
    "country": "test3",
    "city": "test3",
    "image_filename": "test3",
    "author_id": 1,
    "year": 2011,
    "enabled": true,
    "created_at": "2020-06-13T15:07:39.000Z",
    "updated_at": "2020-06-14T15:07:39.000Z"
}
```
8. localhost:3000/api/v1/cars/update
```
{
    "id_car": 1,
    "car": {
        "mark": "test4",
        "model": "test4",
        "description": "test4test4test4",
        "slug": "test4",
        "country": "test4",
        "city": "test4",
        "image_filename": "test4",
        "author_id": 1,
        "year": 2010,
        "enabled": true,
        "created_at": "2020-06-13T15:07:39.000Z",
        "updated_at": "2020-06-14T15:07:39.000Z"
    }
}
```
9. localhost:3000/api/v1/cars/delete
```
{"id_car": 1}
```