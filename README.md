[![CodeFactor](https://www.codefactor.io/repository/github/powerfulsheron/mediummern/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/powerfulsheron/mediummern)

# MediumMern

MERN (Mongo, Express, React, Node) medium.com clone

# Installation

```
docker-compose up
docker-compose exec client yarn install
docker-compose exec server yarn install
```

# Connect to mongo console and initialize

```
docker exec -it [mongo_container] mongo -u root -p password
use SampleCollections
db.createCollection("types")
db.types.insertMany(
    [{
        name: 'WEB',
        description: 'Everything related to the web'
    },
    {
        name: 'RESEAU',
        description: 'Everything related to network'
    },
    {
        name: 'SYSTEME',
        description: 'Everything related to systems'
    },
    {
        name: 'TECH',
        description: 'Everything related to technologies'
    },
    {
        name: 'OTHER',
        description: 'Everything related to anything'
    }]
)
```
