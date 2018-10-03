// Taken from Google chrome developers channel
// https://www.youtube.com/watch?v=RoVy9EoIloQ&t=0s&list=PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9&index=3

let TransformStreamPromise = Promise.resolve()
    .then(() => {
        if ('TransfromStream' in self) { // check if it is available, self maybe window or module you are working with 
            return TransfromStream;
        }
        // have to load polyfill because it is not avaiable
        const {TransfromStream} = await import('/streams-module.js');
        return TransfromStream;
    });

    (async function() {
        const TransfromStream = await TransformStreamPromise;
        const ts = new TransfromStream(/*....*/);
    })();