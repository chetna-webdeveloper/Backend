require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData={
            "login": "chetna-webdeveloper",
        "id": 177013235,
        "node_id": "U_kgDOCo0B8w",
        "avatar_url": "https://avatars.githubusercontent.com/u/177013235?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/chetna-webdeveloper",
        "html_url": "https://github.com/chetna-webdeveloper",
        "followers_url": "https://api.github.com/users/chetna-webdeveloper/followers",
        "following_url": "https://api.github.com/users/chetna-webdeveloper/following{/other_user}",
        "gists_url": "https://api.github.com/users/chetna-webdeveloper/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/chetna-webdeveloper/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/chetna-webdeveloper/subscriptions",
        "organizations_url": "https://api.github.com/users/chetna-webdeveloper/orgs",
        "repos_url": "https://api.github.com/users/chetna-webdeveloper/repos",
        "events_url": "https://api.github.com/users/chetna-webdeveloper/events{/privacy}",
        "received_events_url": "https://api.github.com/users/chetna-webdeveloper/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 6,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2024-07-30T11:24:34Z",
        "updated_at": "2024-08-29T15:49:50Z"
      }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
    res.send("welcome to twitter")
})
app.get("/login",(req,res)=>{
    res.send("<h1>hello there buddy</h1>")
})
app.get("/github",(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})