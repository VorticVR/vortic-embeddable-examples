This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Guide to use this Embedder page as an iFrame in any web page

#### Dependencies:

The embedder app user a library [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer) to handle resizing of the page inside the iframe and to make the iframe functional we need to include that as a script in the page that has iframe.

```
<script type="text/javascript"  src="https://vortic-static-content.s3.eu-west-2.amazonaws.com/resizer.min.js"></script>
```
The detailed usage of the methods of this library is described in the examples given below.
Best option is to use it as it is in the example html pages.


#### Usage:

- Free width and height (100vh, 100vw)

    [Example is here](http://vortic-static-content.s3.eu-west-2.amazonaws.com/free.html)

- A specific width and height. e.g 1280px * 720px

    [Example is here](http://vortic-static-content.s3.eu-west-2.amazonaws.com/1280.html)
  
    There are just 2 differences:
    
    - Need to specify the height and width of iframe in styles.
    - Explicitly specify the height of iframe in the source of iframe in side the query param 'h' e.g. src="https://embed-dev.vortic.io/#e=4435&h=720"


- Calling functionalities from inside the Iframe.
  
    There are a few buttons in the page that call the methods from inside the Iframe. We need send a cerrtain message to iframe, iframe reads that message and performs the functionalities accordingly.
    - Select first artwork
      ```
      function selectArtwork() {
        sendMessageToIframe('selectArtwork')
      }
      ```
    - Collapse Iframe
      ```
      function collapseIframe() {
        sendMessageToIframe('collapseIframe')
      }
      ```
    - Open Iframe
      ```
      function openIframe() {
        sendMessageToIframe('openIframe')
      }
      ```
    - Go to Artwork (id)
      
      artworkId is the id of the artwork to open.
      ```
      function gotToArtwork() {
            sendMessageToIframe(JSON.stringify({type: 'gotToArtwork', artworkId: 9053}))
      }
      ```
    - Go to Artwork (id) and open iframe
      
      artworkId is the id of the artwork to open.
      ```
      function gotoArtworkandOpenIframe() {
        sendMessageToIframe(JSON.stringify({type: 'gotoArtworkandOpenIframe', artworkId: 9053}))
      }
      ```

We have provided an example to do so in the [Example here](http://vortic-static-content.s3.eu-west-2.amazonaws.com/free.html)
