//async javascript

function getDataCallback(callback) {
    setTimeout(() => {
        callback("Data received using callback");
    }, 1000);
}

function getDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received using promise");
        }, 1000);
    });
}

async function getDataAsync() {
    const data = await getDataPromise();
    console.log(data);
}

getDataCallback(data => {
    console.log(data);
});

getDataPromise().then(data => {
    console.log(data);
});

getDataAsync();