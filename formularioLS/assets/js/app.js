// armo las variables

const tweetList = document.querySelector('#lista-tweets');


// listener 
eventListener();

function eventListener() {

    document.querySelector('#tweet').addEventListener('keyup', buttonStatus);

    // agregar tweet
    document.querySelector('#formulario').addEventListener('submit', addTweet);

    // borrar tweet
    tweetList.addEventListener('click', deleteTweet);
    
    // Contenido cargado
    document.addEventListener('DOMContentLoaded', saveTweetlocalStorage);

}

// funciones

function addTweet(e) {
    e.preventDefault();
    // leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;

    createElementsTweets(tweet);

    let tweets = [];
    tweets.push(tweet); 
    
    tweets.forEach((tweet, index) => {
        console.log(tweet, index);
    });

    addTweetLocalStore(tweet);
    document.querySelector('#tweet').value = '';
    buttonStatus();
}

function buttonStatus () {
    const textareaText = document.querySelector('#tweet').value;
    const button = document.querySelector('.button-primary');
    if (textareaText != ''){        
        button.disabled = false;                
    } else {
        button.disabled = true;
    }
}


function deleteTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        deleteTweetLocalStorage(e.target.parentElement.innerText);

    }

}

function createElementsTweets(tweet, ) {
    // crear elemento y añadirme el tweet
    const li = document.createElement('li');  
    let listItemCounter = 0;      
    li.innerText = tweet;
    // delete button
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'borrar-tweet';
    deleteButton.innerText = 'X';
    li.appendChild(deleteButton);
    li.id = 'list-Item' + listItemCounter++;
    tweetList.appendChild(li);
    
    
}

// guardar en el localstorage los tweets

function saveTweetlocalStorage(tweet) {
    let tweets;
    tweets = getTweetLocalStore();

    tweets.forEach(tweet => {
        createElementsTweets(tweet);
    });    
}

// agregar tweet a local storage
function addTweetLocalStore(tweet) {
    let tweets;
    tweets = getTweetLocalStore();
    // añadir nuevo tweet
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// comprobar si hay tweet en el localstorege
function getTweetLocalStore() {
    let tweets;

    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function deleteTweetLocalStorage(tweet) {

    let tweets, tweetTxt;
    
    tweetTxt = tweet.substring(0, tweet.length - 1);

    tweets = getTweetLocalStore();

    tweets.forEach( (tweet, index) => {
        if (tweet === tweetTxt) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));

}