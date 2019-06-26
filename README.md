# MediumMern
MERN (Mongo, Express, React, Node) medium.com clone

# Installation 
```
docker-compose up
docker-compose run client npm install
docker-compose run client npm install
```
# Connect to mongo console and initialize 
```
docker exec -it [mongo_container] mongo -u root -p password
use SampleCollections
db.createCollection("types")
db.createCollection("tags")
db.types.insertMany(
    [{ 
        name: 'Rubax',
        description: 'Everything related to Ruby'
    },
    {
        name: 'Javax',
        description: 'Everything related to Java'
    },
    {
        name: 'Javascriptax',
        description: 'Everything related to JS'
    },
    {
        name: 'PHPax',
        description: 'Everything related to PHP'
    },
    {
        name: 'Pythonax',
        description: 'Everything related to Python'
    }]
)
db.tags.insertMany(
    [{ 
        name: 'api',
    },
    {
        name: 'test',
    },
    {
        name: 'orm',
    },
    {
        name: 'documentation',
    },
    {
        name: 'script',
    },
    {
        name: 'snippet',
    },
    {
        name: 'database',
    },
    {
        name: 'software',
    },
    {
        name: 'tool',
    },
    {
        name: 'mooc',
    },
    {
        name: 'sdk',
    },
    {
        name: 'security',
    },
    {
        name: 'client',
    },
    {
        name: 'token',
    },
    {
        name: 'cloud',
    },
    {
        name: 'CI',
    }
    ]
)
```