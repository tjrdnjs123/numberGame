//랜덤번호 지정 
//유저가 번호를 입력한다 go 라는 버튼을 누름
//맞추면 , 맞췄습니다!
//랜덤번 < 유저번 down
//유저번 < 랜덤번 up 
//Reset 누르면 리셋
//5 기회 다쓰면 겜 끝 추측불가 버튼 사용불가
//1~100 범위 안 숫자만 기회 깎 x 
// 유저가  이미 입력한 숫자 기회 깎 x

let computerNum = 0 
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
playButton.addEventListener("click",play)
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
}
function play(){
    let userValue = userInput.value
    if(computerNum>userValue){
        resultArea.textContent = "Up"
    } else if(computerNum<userValue){
        resultArea.textContent = "Down"
    } else{
        resultArea.textContent = "정답!"
    }
}
pickRandomNum()