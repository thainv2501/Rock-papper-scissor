const computerOptions = ['rock', 'paper', 'scissor']
const box = [...document.querySelectorAll('[data-value]')]
const computerBox = document.getElementsByClassName('computer')[0]
const playerBox = document.getElementsByClassName('player')[0]
const titleBox = document.getElementsByClassName('title-box')[0]
const modal = document.getElementsByClassName('modal')[0]
let playerCount = 0
let computerCount = 0
box.forEach(element => {
    console.log(element)
});
reset = () => {
    playerCount = 0
    computerCount = 0
    titleBox.getElementsByClassName('title')[0].innerHTML = 'FIGHT'
    playerBox.getElementsByClassName('score')[0].innerHTML = playerCount;
    computerBox.getElementsByClassName('score')[0].innerHTML = computerCount;
}
randomComputerOption = () => {
    let randNum = Math.floor(Math.random() * 3);
    return computerOptions[randNum]
}
choses = (element) => {
    let playerOption = element.dataset.value
    fight(playerOption)
}

fight = (playerOption) => {
    let computerOption = randomComputerOption()

    console.log(playerOption, computerOption)
    show(playerOption, computerOption)
    if (playerOption === 'scissor' && computerOption === 'paper') {
        playerCount++;
    }
    if (playerOption === 'paper' && computerOption === 'rock') {
        playerCount++;
    }
    if (playerOption === 'rock' && computerOption === 'scissor') {
        playerCount++;
    }
    if (computerOption === 'scissor' && playerOption === 'paper') {
        computerCount++;
    }
    if (computerOption === 'paper' && playerOption === 'rock') {
        computerCount++;
    }
    if (computerOption === 'rock' && playerOption === 'scissor') {
        computerCount++;
    }
    playerBox.getElementsByClassName('score')[0].innerHTML = playerCount;
    computerBox.getElementsByClassName('score')[0].innerHTML = computerCount;
    if (playerCount == 3) {
        titleBox.getElementsByClassName('title')[0].innerHTML = 'YOU WIN'
        modal.getElementsByClassName('title')[0].innerHTML = 'YOU WIN'
        openModal()
    }
    if (computerCount == 3) {
        titleBox.getElementsByClassName('title')[0].innerHTML = 'COMPUTER WIN'
        modal.getElementsByClassName('title')[0].innerHTML = 'COMPUTER WIN'
        openModal()
    }

}

show = (playerOption, computerOption) => {
    box.forEach(element => {
        if (element.dataset.value === playerOption) {
            document.getElementsByClassName('player-decision-img')[0].src = element.dataset.img // way 1
        }
        if (element.dataset.value == computerOption) {
            document.getElementsByClassName('computer-decision-img')[0].src = element.src //way 2
        }
    });


}

function openModal() {
    document.getElementsByClassName('bg-modal')[0].classList.add('active')
    document.getElementsByClassName('modal')[0].classList.add('active')
}

function closeModal() {
    document.getElementsByClassName('bg-modal')[0].classList.remove('active')
    document.getElementsByClassName('modal')[0].classList.remove('active')
    reset()
}