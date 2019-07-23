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
db.createCollection("posts")
db.posts.insertMany([
    {
        title: "POST 1",
        description: "Desc 1",
        content: "Content 1",
        date: "2018-01-01",
        timetoread: 1,
        mainimage: "https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg",
        score: 1,
        user: {
            _id: "5d115961da3472001cc34fd8",
            name: "Canavaggio",
            surname: "Lorenzo",
            profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
        },
        type: "5d1325e0af51080d8afdd7fa",
        tags: ["tests","docker","CI"],
        comments:[
        {
            content: "trop bien j'ai kiffé wlh",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        {
            content: "trop bien j'ai kiffé wlh 2",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        {
            content: "trop bien j'ai kiffé wlh 3",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        ]
    },
    {
        title: "POST 2",
        description: "Desc 2",
        content: "Content 2",
        date: "2018-01-01",
        timetoread: 2,
        mainimage: "https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg",
        score: 2,
        user: {
            _id: "5d115961da3472001cc34fd8",
            name: "Canavaggio",
            surname: "Lorenzo",
            profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
        },
        type: "5d1325e0af51080d8afdd7fb",
        tags: ["java","spring","auth"],
        comments:[
        {
            content: "trop bien j'ai kiffé wlh",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        {
            content: "trop bien j'ai kiffé wlh 2",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        {
            content: "trop bien j'ai kiffé wlh 3",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        ]
    },
    {
        title: "POST 3",
        description: "Desc 3",
        content: "Content 3",
        date: "2018-01-01",
        timetoread: 3,
        mainimage: "https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg",
        score: 3,
        user: {
            _id: "5d115961da3472001cc34fd8",
            name: "Canavaggio",
            surname: "Lorenzo",
            profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
        },
        type: "5d1325e0af51080d8afdd7fc",
        tags: ["jest","npm","yarn"],
        comments:[
        {
            content: "trop bien j'ai kiffé wlh",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        {
            content: "trop bien j'ai kiffé wlh 2",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        {
            content: "trop bien j'ai kiffé wlh 3",
            date: "2018-01-01",
            user: {
                _id: "5d1325e0af51080d8afdd7fa",
                name: "Canavaggio",
                surname: "Lorenzo",
                profilepictureurl: "https://avatars0.githubusercontent.com/u/18470816?s=460&v=4"
            }
        },
        ]
    }
    ]
)

```
