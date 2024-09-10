// Elementos do DOM para facilitar manipulações
const startButton = document.getElementById('start-btn');
const storyContainer = document.getElementById('story-container');
const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

// Variáveis de estado do jogo
let state = {};

// História do jogo
const story = {
    start: {
        text: "You are in a mystical forest. There are paths to the north, south, east, and west.",
        choices: [
            { text: "Go North", next: "north" },
            { text: "Go South", next: "south" },
            { text: "Go East", next: "east" },
            { text: "Go West", next: "west" }
        ]
    },
    north: {
        text: "You encounter a fierce dragon. What will you do?",
        choices: [
            { text: "Fight the dragon", next: "fight_dragon" },
            { text: "Run away", next: "run_away" }
        ]
    },
    south: {
        text: "You find a tranquil lake with sparkling water.",
        choices: [
            { text: "Swim in the lake", next: "swim_lake" },
            { text: "Continue walking", next: "continue_south" }
        ]
    },
    east: {
        text: "You find a hidden treasure chest!",
        choices: [
            { text: "Open the chest", next: "open_chest" },
            { text: "Leave it alone", next: "leave_chest" }
        ]
    },
    west: {
        text: "You meet a wise old man who offers you a choice of two potions.",
        choices: [
            { text: "Take the red potion", next: "red_potion" },
            { text: "Take the blue potion", next: "blue_potion" }
        ]
    },
    fight_dragon: {
        text: "You bravely fight the dragon and win! You are now a hero.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    run_away: {
        text: "You safely run away, but the forest remains dangerous.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    swim_lake: {
        text: "You swim in the lake and feel refreshed.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    continue_south: {
        text: "You continue walking and discover a hidden village.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    open_chest: {
        text: "You open the chest and find a treasure of gold and jewels!",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    leave_chest: {
        text: "You leave the chest and continue your journey.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    red_potion: {
        text: "The red potion gives you immense strength!",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    blue_potion: {
        text: "The blue potion grants you eternal wisdom.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    }
};

// Event Listener para iniciar o jogo
startButton.addEventListener('click', startGame);

// Função para iniciar o jogo
function startGame() {
    startButton.classList.add('hide');
    storyContainer.classList.remove('hide');
    state = {};
    showStoryNode("start");
}

// Função para exibir a parte da história
function showStoryNode(nodeKey) {
    const node = story[nodeKey];
    storyElement.innerText = node.text;
    while (choicesElement.firstChild) {
        choicesElement.removeChild(choicesElement.firstChild);
    }
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectChoice(choice.next));
        choicesElement.appendChild(button);
    });
}

// Função para selecionar uma escolha
function selectChoice(nextNodeKey) {
    showStoryNode(nextNodeKey);
}
