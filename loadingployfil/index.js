let TransformStreamPromise = Promise.resolve()
    .then(() => {
        if ('TransfromStream' in self) { // check if it is available
            return TransfromStream;
        }
        const {TransfromStream} = await import('/streams-module.js');
        return TransfromStream;
    });

    (async function() {
        const TransfromStream = await TransformStreamPromise;
        const ts = new TransfromStream(/*....*/);
    })();