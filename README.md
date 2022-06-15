# fetch-project

# Fetch-cp project

It's a npm package created to make API requests. Involves instances of Headers and Request to finally use fetch method. 

## Getting Started

- Clone this repository by typing: `https://github.com/cesarherreras/fetch-project.git`
- Switch to project directory: `cd fetch-project`

### Prerequisites

- Download the node-fetch dependency. The version required is 2.6.7 to avoid vulnerabilities. 
- Download the package named fetch-cp. Link: https://www.npmjs.com/package/fetch-cp

### Usage

#### Example
                            let request = require('../node_modules/fetch-cp');

                            //API_KEY and url
                            const API_KEY = "";
                            const API_URL = "";

                            //Input object
                            //GET request
                            const inputFunction = {
                                method : "GET",
                                headers: {
                                    "x-api-key": API_KEY
                                }
                            };

                            request.cfetch(API_URL, inputFunction);
