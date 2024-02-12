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
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let chance = 5
let history = []
playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",empty)
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
}
function play(){
    let userValue = userInput.value
    if (userValue < 1 || userValue >100){
        resultArea.textContent = "1이상 100이하의 정수를 입력해주세요"
        return
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 값입니다"
        return
    }
    
    
    chance --
    chanceArea.textContent = `기회 ${chance}번 남았습니다`
    if(computerNum>userValue){
        resultArea.textContent = "Up"
    } else if(computerNum<userValue){
        resultArea.textContent = "Down"
    } else{
        resultArea.textContent = "정답!"
        playButton.disabled = true
    }
    if(chance<1){
        playButton.disabled = true
    }
    history.push(userValue)
}
function reset(){
    chanceArea.textContent = "기회 5번 남았습니다"
    chance = 5
    playButton.disabled = false
    
    userInput.value=""
    pickRandomNum()
    resultArea.textContent = "결과값이 이곳에 나옵니다"
    
    
}function empty(){
    userInput.value = ""
}
pickRandomNum()