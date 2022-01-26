// const socket = new WebSocket("ws://localhost:5001");
const socket = new WebSocket("ws://192.168.1.4:5001/");
const user = ['AAA', 'BB','CC','DD','EE','F'];
const setUserScore = () => {
    const name = user[Math.floor(Math.random() * Math.floor(6))];
    const score = Math.floor(Math.random() * 1000);
    return JSON.stringify({name, score});
};
socket.send(setUserScore());

//WebSocketで接続
const socket = new WebSocket("ws://192.168.1.4:5001");


const user = ["TEAM1","TEAM2","TEAM3","TEAM4","TEAM5","TEAM6","TEAM7"
,"TEAM8","TEAM9","TEAM10","TEAM11","TEAM12","TEAM13","TEAM14","TEAM15","TEAM16","TEAM17","TEAM18"];


const setUserScore = () => {
    const name = user[0];
    const score = 90;
    return JSON.stringify({name, score});
};
socket.send(setUserScore());

