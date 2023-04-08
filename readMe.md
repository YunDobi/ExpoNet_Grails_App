# Expo Clients App

# OverVeiw #

ExpoClient is a one of the CRUD format of application that created by redux with bootstrap for simple and clean UI, 
Grails for api server, and lastly used Mongodb server for database. While I was working on this project, the biggest hardship
was limited resources for learning Grails, and mongodb server authorization.
However, spent more time for reading the documentation deeply, and controlling multiple versions of technical tools were great 
experiences, and improved my research skill with version control.

## Versions ##

[![TechSkills](https://skillicons.dev/icons?i=js,react,redux,mongodb,git)](https://skillicons.dev)
and ![grails.png](..%2F..%2F..%2FDownloads%2Fgrails.png )
- JDK 8
- Grails 3
- React 18.2.0
- MongoDB 5

### Getting Start ###
- clone the repository
- start mongodb server

  ```mongod --auth -dbpath </YOUR/data/db>```
- cd server
- open the ```grails-app/conf/application.yml``` and change the mongodb url.
the url will be looks like ```mongodb://<username>:<password>@localhost:27017/admin?authSource=admin```
- run:
```grails run-app```
- move to the client directory to install
- npm install
- npm start

## Demo ##
![Screen Shot 2023-04-08 at 3.43.25 AM.png](..%2F..%2FScreen%20Shot%202023-04-08%20at%203.43.25%20AM.png)
![Screen Shot 2023-04-08 at 3.43.38 AM.png](..%2F..%2FScreen%20Shot%202023-04-08%20at%203.43.38%20AM.png)
![Screen Shot 2023-04-08 at 3.44.01 AM.png](..%2F..%2FScreen%20Shot%202023-04-08%20at%203.44.01%20AM.png)

### comment ###
if the setting or command is not working correctly, welcome to ask my command that I used on my localhost.
Contact me at lyc1353@gmail.com.