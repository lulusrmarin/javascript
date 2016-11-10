<!DOCTYPE html>
<head>
<script type="text/javascript" src="js/phaser.min.js"></script>
</head>
<body>
<script>
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var gameWidth = 800;
var gameHeight = 420;

const CARDS_IN_SUIT = 13;
const SUITS_IN_DECK = 4;

function deal_card() {
	game.add.text(32, 64, 'Card Dealt!', { fill: 'white' });
    card = game.add.sprite(340, 300, 'aceSpades');
	card.scale.setTo(0.25,0.25)	
}

function preload() {

	var suit_no = 0;
	while(suit_no < SUITS_IN_DECK) {
		if(suit_no == 0) {
			var suit = 'Clubs';				
		}
		else if (suit_no == 1) {
			var suit = 'Diamonds';				
		}
		else if (suit_no == 2) {
			var suit = 'Hearts';				
		}
		else if (suit_no == 3) {
			var suit = 'Spades';				
		}
	
		var card_no = 1;
		while (card_no <= CARDS_IN_SUIT) {
			console.log(card_no)
			if(card_no > 1 && card_no < 10) {
				var card = card_no + 1;
			}
			else if(card_no > 10) {
				if(card_no == 11) { var card = "jack"; }
				if(card_no == 12) { var card = "queen"; }
				if(card_no == 13) { var card = "king"; }
			}
			else if(card_no == 1) {
				var card = 'ace';
			}
			console.log(card);
			game.load.image(card + suit, 'cards/' + card + '_of_' + suit + '.png');
			card_no++;
		}
		
		console.log(suit_no);
		suit_no++;
	}
	
	game.load.image("cardBack","cards/card_back.png")
}

function create() {
	game.stage.backgroundColor = "2C5A1E";
    card = game.add.sprite(340, 20, 'cardBack');
	card.scale.setTo(0.25,0.25)
	game.add.text(32, 32, 'Deal Card Demo', { fill: 'white' });

	card.inputEnabled = true;
	card.events.onInputDown.add(deal_card, this);
}

function update() {
}
</script>
