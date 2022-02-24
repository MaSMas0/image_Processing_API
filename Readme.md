# Image Process API
## Powered By

![](https://d20vrrgs8k4bvw.cloudfront.net/images/open-graph/udacity.png)



## Project Folder Contents
### Image_Processing_API
  * dist
  * node_modules
  * public
    - images
    - thumbs
  * spec
    - support
        * jasmine.json
  * src
    - routes
        * api
            - originalPicApi.ts
            - processedPicApi.ts
        * routes.ts
    - tests
        * helpers
            - reporter.ts
        * appSpec.ts
        * cachingSpec.ts
        * originalPicApiSpec.ts
        * processedPicApiSpec.ts
        * server_EndPointsSpec.ts
        * utilitySpec.ts
    - utilities
        * utility.ts
    - app.ts
    - caching.ts
    - server.ts
    - views
        * index.ejs
        * processingImg.ejs
  * .eslintignore
  * .eslintrc
  * .gitignore
  * .prettierignore
  * .prettierrc
  * package-lock.json
  * package.json
  * README.md
  * tsconfig.json

  ## Project Description

  This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.


  
  ## project tools and frameworks
    this api has been done using **TypeScript** & **NodeJS** & **ExpressJS** & **Sharp**
  - [NodeJS](https://nodejs.org/en/) - an asynchronous event-driven JavaScript runtime
  - [Express](https://expressjs.com/) - back end web application framework for Node.js.
  - [TypeScript](https://www.typescriptlang.org/) - coding language developed as a superset of JavaScript.
  - [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processing package.

## Instructions

  To run the site you need to run it on your localhost server by downloading node.js from [here](https://nodejs.org/en/) and you need to write on terminal the following codes:

### installation and running

 ```
npm install 

```
to install the dependencies and devdependencies

 ```
npm run build

```
  to transpile the typeScript codes into JavaScript codes and save them in the `./dist` folder.

 ```
npm run build

```

   **to start the server running on port `2784`.**

  ## Testing and Linting

 to lint you need to write the following code :

```
npm run lint

```

to test you will need to write the following code:

```
npm run test

```

  ## project End Points
  ```
  `/magic/images/original/?filename=<image_name>`
  ```
  * HTTP method: `get`
  * Query Param: `filename` - the specific image you are requesting.
        
  ```
  For example: `localhost:2784/magic/images/original/?filename=encenadaport`
  ```
    
  ```
  `/magic/images/processing/?width=<width>&height=<height>&blury=<blur_amount>&filename=<image_name>`
  ```
  kindly put the blury >= 1 in order for the api to work , lower than 1 will make the sharp crash :D

  * HTTP Method: `get`
  * Query Param: `filename` - image filename `height` and `width` - dimension of the pictures in pixels and `blury`
      
  ```
  For example: `localhost:2784/magic/images/processing/?width=300&height=300&blury=1&filename=santamonica`
  ```
  ### Images in offer

  1. `encenadaport`
  2. `fjord`
  3. `icelandwaterfall`
  4. `palmtunnel`
  5. `santamonica`

  ### Functionality

  - you can change the query parameters with width and height as long as it is from the 5 pictures existing
  - images that got processed will be saved on your localdisk.
  - any processed image will be cached and it wont be reprocessed to the same parameters again

**Please note that the version of dependencies is mentioned in package.json**

### Contact Info for Programmer
* Name: _Mohamed Abd El-Samie Ahmad Mansour_
* Email: mmansour92@icloud.com  
