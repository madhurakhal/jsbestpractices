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