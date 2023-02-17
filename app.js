function outMessage1() {
    console.log('good morning')
}

function outMessage2() {
    console.log('good afternoon')
}

function outMessage3() {
    console.log('good evening')
}

function outMessage4() {
    console.log('good night')
}

function outMessage5() {
    console.log('Seriously, get some sleep');
}

function runSynchronously() {
    outMessage1()
    outMessage2()
    outMessage3()
    outMessage4()
    outMessage5()
}


// Old way of callbacks

function runAsynchronouslyWithCallBackHell() {
    setTimeout(() => {
        outMessage1();
        setTimeout(() => {
            outMessage2()
            setTimeout(() => {
                outMessage3()
                setTimeout(() => {
                    outMessage4()
                    setTimeout(() => {
                        outMessage5()
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 100)
}

// Running Asynchronously with Promises

function runAsynchronouslyWithPromises() {
    function waitForTimeInterval(milliseconds) {
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve()
            }, milliseconds);
        })
    }
    
    waitForTimeInterval(0)
    .then(() => console.log('Running Asynchronously with Promises'))
    .then(outMessage1)
    .then(() => waitForTimeInterval(1000))
    .then(outMessage2)
    .then(() => waitForTimeInterval(1500))
    .then(outMessage3)
    .then(() => waitForTimeInterval(2000))
    .then(outMessage4)
    .then(() => waitForTimeInterval(2500))
    .then(outMessage5)
    .then(() => waitForTimeInterval(3000))
}

async function runAsynchronouslyWithAsyncAndWait() {
    function waitForTimeInterval(milliseconds) {
        return new Promise((resolve) => {
            return setTimeout(() => {
                resolve()
            }, milliseconds);
        })
    }
    
    console.log("Runnning Asynchronously with Async and Wait")
    await waitForTimeInterval(0)
    outMessage1();
    await waitForTimeInterval(500)
    outMessage2();
    await waitForTimeInterval(1000)
    outMessage3();
    await waitForTimeInterval(1500)
    outMessage4();
    await waitForTimeInterval(2000)
    outMessage5();
}

// runSynchronously();
// runAsynchronouslyWithCallBackHell();
// runAsynchronouslyWithPromises();
runAsynchronouslyWithAsyncAndWait();