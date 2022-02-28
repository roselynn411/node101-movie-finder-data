movie-finder-data

Find-movie-data Movie Finder Data Introduction In this project we're going to:

Create a server using the Express framework Log all incoming requests with the morgan logging library Accept requests for the Open Movie DataBase (OMDB) API Make the requests to the OMDB using the axios library Cache, or store, the responses for subsequent requests Ensure the data is updated at least once a day Once again we're going to use the Express framework to build a server that can talk to another server and cache the results.

When you have a server whose only purpose is to talk in place of another server, it is considered a proxy server. For example instead of our client app requesting movie data from the OMDb API directly, the client will request it from this server which will then request it from the OMDb API.

This may sound odd because this server is just be sitting in the middle taking up extra time, but this allows to add and implement features that may not be available on the original service, like caching.

When a server receives a request sometimes it has to look up data in a database or process the request in some way that could take a long time. Let's say on average it takes half a second to respond. If a lot of the same requests are received, processing the same request over and over those half-seconds start to add up. When a lot of the same requests are received, one could simply store a copy of the results the first time and then quickly send that copy to anyone else that makes a similar request. This strategy of saving the data is called "caching".

A cache is a copy of data that can be returned faster than the fully processed request. Adding a cache to a server could allow a single server to handle hundred of times more requests than one without a cache.

However, if we have some data cached and there's an update to that data in the database, the data in our cache is now old or "stale". One solution is to refresh it based on time, how often that is depends on how frequently you think the data will change.

Since movie data for most movies isn't going to change very often, getting new data once a day should allow us to be reasonably sure that the data we have stored is the most up to date.

Now you will build a web server that will respond to GET requests for http://localhost:3000/ and return the data from the OMDb API.

When making a second request to the same endpoint http://localhost:3000/?i=tt3896198, the server should not return data from the OMDB API, but instead from some object or array.

Exit Criteria Server should log each request using morgan's dev format

Server should indicate when it is listening and on which port

Server should respond to GET requests to /?i=tt3896198 with movie data

Server should respond to GET requests to /?i=tt3896198 with movie data without fetching from the OMDb api

Server should respond to GET requests to /?t=baby%20driver with movie data

Server should respond to GET requests to /?t=baby%20driver with movie data, without fetching from the OMDb api

All tests should pass
