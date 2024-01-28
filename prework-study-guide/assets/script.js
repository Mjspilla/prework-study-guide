var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

<<<<<<< HEAD
function listTopics(){
=======
function listTopics() {
>>>>>>> 34d4d217fb6928b6af15d33c5affd3a9ae2bc384
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
<<<<<<< HEAD
if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CCS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("let's study JavaScript!");
=======
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopics === 'JavaScript') {
        console.log("Let's study JavaScript!");
>>>>>>> 34d4d217fb6928b6af15d33c5affd3a9ae2bc384
    } else {
        console.log('Please try again!');
    }
}
<<<<<<< HEAD

=======
>>>>>>> 34d4d217fb6928b6af15d33c5affd3a9ae2bc384
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();


<<<<<<< HEAD

=======
>>>>>>> 34d4d217fb6928b6af15d33c5affd3a9ae2bc384
