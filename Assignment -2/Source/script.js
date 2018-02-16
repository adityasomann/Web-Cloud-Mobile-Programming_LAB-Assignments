function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)

    return $.ajax({type: "GET",
        url:'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2018-02-15&' +
        'sortBy=popularity&' +
        'apiKey=35dd737749cf48d98ac68bd6c627be7e',
        async: false
    });

    var req = new Request(url);

    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })

}