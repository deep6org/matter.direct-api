const EventEmitter = require('events').EventEmitter
const util = require('util');

import {Fluence} from '@fluencelabs/fluence'
// import {toronto} from '@fluencelabs/fluence-network-environment'
import {krasnodar} from '@fluencelabs/fluence-network-environment'
import { getRelayTime } from './_aqua/getting-started'

const randomAccessIDB = require('random-access-idb')
const id = process.argv[2] || 0

const relayNode = krasnodar[0];

const n3pthora = [
  ['Strength','https://i.ibb.co/7Ktj6vr/0x01-strength.png','Strength of Love providing support to see with courage in points of massive potential to make impact.'],
  // ['Strength','https://i.ibb.co/7Ktj6vr/0x01-strength.png" alt="0x01-strength','Strength of Love providing support to see with courage in points of massive potential to make impact.'],
  ['Community','https://i.ibb.co/XYBgMtR/0x02-community.png','Time to take a stroll in the community, evaluate bias, see what what guides you and make better judgements for inspiring double edged decisions.'],
  ['Shared Emotion','https://i.ibb.co/Y70kh0n/0x03-shared-emotion.png','Considering the fox and the swan totem to find moments of time to share emotions of free will in contemplating kindness. Might be time for a gift.'],
  ['Past Obstacles','https://i.ibb.co/3f4JcX4/0x04-past-obstacles.png','Moving past an obstacle, allowing one to give rise to new opportunity in the little details. Appreciate a cloud, a plant, a tree.'],
  ['Chariot Moving','https://i.ibb.co/cDwQQGh/0x05-dapr-chariot.png','Time to move forward with the dark & light of the chariot, giving rise to the star alignments, responsive to the woven nature of life.'],
]

const decks = [
			[
			  ['The Fool','https://www.trustedtarot.com/img/cards/the-fool.png'],
			  ['The Magician','https://www.trustedtarot.com/img/cards/the-magician.png'],
			  ['The High Priestess','https://www.trustedtarot.com/img/cards/the-high-priestess.png'],
			  ['The Empress','https://www.trustedtarot.com/img/cards/the-empress.png'],
			  ['The Emperor','https://www.trustedtarot.com/img/cards/the-emperor.png'],
			  ['The Hierophant','https://www.trustedtarot.com/img/cards/the-heirophant.png'],
			  ['The Lovers','https://www.trustedtarot.com/img/cards/the-lovers.png'],
			  ['The Chariot','https://www.trustedtarot.com/img/cards/the-chariot.png'],
			  ['Fortitude','https://www.trustedtarot.com/img/cards/strength.png'],
			  ['The Hermit','https://www.trustedtarot.com/img/cards/the-hermit.png'],
			  ['Wheel Of Fortune','https://www.trustedtarot.com/img/cards/wheel-of-fortune.png'],
			  ['Justice','https://www.trustedtarot.com/img/cards/justice.png'],
			  ['The Hanged Man','https://www.trustedtarot.com/img/cards/the-hanged-man.png'],
			  ['Death','https://www.trustedtarot.com/img/cards/death.png'],


			  ['Temperance','https://www.trustedtarot.com/img/cards/temperance.png'],
			  ['The Devil','https://www.trustedtarot.com/img/cards/the-devil.png'],
			  ['The Tower','https://www.trustedtarot.com/img/cards/the-tower.png'],
			  ['The Star','https://www.trustedtarot.com/img/cards/the-star.png'],
			  ['The Moon','https://www.trustedtarot.com/img/cards/the-moon.png'],
			  ['The Sun','https://www.trustedtarot.com/img/cards/the-sun.png'],
			  ['Judgement','https://www.trustedtarot.com/img/cards/judgement.png'],
			  ['The World','https://www.trustedtarot.com/img/cards/the-world.png'],


			  ['King of Cups','https://www.trustedtarot.com/img/cards/king-of-cups.png'],
			  ['Queen of Cups','https://www.trustedtarot.com/img/cards/queen-of-cups.png'],
			  ['Knight of Cups','https://www.trustedtarot.com/img/cards/knight-of-cups.png'],
			  ['Page of Cups','https://www.trustedtarot.com/img/cards/page-of-cups.png'],
			  ['X of Cups','https://www.trustedtarot.com/img/cards/ten-of-cups.png'],
			  ['IX of Cups','https://www.trustedtarot.com/img/cards/nine-of-cups.png'],
			  ['VIII of Cups','https://www.trustedtarot.com/img/cards/eight-of-cups.png'],
			  ['VII of Cups','https://www.trustedtarot.com/img/cards/seven-of-cups.png'],
			  ['VI of Cups','https://www.trustedtarot.com/img/cards/six-of-cups.png'],
			  ['V of Cups','https://www.trustedtarot.com/img/cards/five-of-cups.png'],
			  ['IV of Cups','https://www.trustedtarot.com/img/cards/four-of-cups.png'],
			  ['III of Cups','https://www.trustedtarot.com/img/cards/three-of-cups.png'],
			  ['II of Cups','https://www.trustedtarot.com/img/cards/two-of-cups.png'],
			  ['Ace of Cups','https://www.trustedtarot.com/img/cards/ace-of-cups.png'],
			  ['King of Swords','https://www.trustedtarot.com/img/cards/king-of-swords.png'],
			  ['Queen of Swords','https://www.trustedtarot.com/img/cards/queen-of-swords.png'],
			  ['Knight of Swords','https://www.trustedtarot.com/img/cards/knight-of-swords.png'],
			  ['Page of Swords','https://www.trustedtarot.com/img/cards/page-of-swords.png'],
			  ['X of Swords','https://www.trustedtarot.com/img/cards/ten-of-swords.png'],
			  ['IX of Swords','https://www.trustedtarot.com/img/cards/nine-of-swords.png'],
			  ['VIII of Swords','https://www.trustedtarot.com/img/cards/eight-of-swords.png'],
			  ['VII of Swords','https://www.trustedtarot.com/img/cards/seven-of-swords.png'],
			  ['VI of Swords','https://www.trustedtarot.com/img/cards/six-of-swords.png'],
			  ['V of Swords','https://www.trustedtarot.com/img/cards/five-of-swords.png'],
			  ['IV of Swords','https://www.trustedtarot.com/img/cards/four-of-swords.png'],
			  ['III of Swords','https://www.trustedtarot.com/img/cards/three-of-swords.png'],
			  ['II of Swords','https://www.trustedtarot.com/img/cards/two-of-swords.png'],
			  ['Ace of Swords','https://www.trustedtarot.com/img/cards/ace-of-swords.png'],
			  ['King of Wands','https://www.trustedtarot.com/img/cards/king-of-wands.png'],
			  ['Queen of Wands','https://www.trustedtarot.com/img/cards/queen-of-wands.png'],
			  ['Knight of Wands','https://www.trustedtarot.com/img/cards/knight-of-wands.png'],
			  ['Page of Wands','https://www.trustedtarot.com/img/cards/page-of-wands.png'],
			  ['X of Wands','https://www.trustedtarot.com/img/cards/ten-of-wands.png'],
			  ['IX of Wands','https://www.trustedtarot.com/img/cards/nine-of-wands.png'],
			  ['VIII of Wands','https://www.trustedtarot.com/img/cards/eight-of-wands.png'],
			  ['VII of Wands','https://www.trustedtarot.com/img/cards/seven-of-wands.png'],
			  ['VI of Wands','https://www.trustedtarot.com/img/cards/six-of-wands.png'],
			  ['V of Wands','https://www.trustedtarot.com/img/cards/five-of-wands.png'],
			  ['IV of Wands','https://www.trustedtarot.com/img/cards/four-of-wands.png'],
			  ['III of Wands','https://www.trustedtarot.com/img/cards/three-of-wands.png'],
			  ['II of Wands','https://www.trustedtarot.com/img/cards/two-of-wands.png'],
			  ['Ace of Wands','https://www.trustedtarot.com/img/cards/ace-of-wands.png'],
			  ['King of Pentacles','https://www.trustedtarot.com/img/cards/king-of-pentacles.png'],
			  ['Queen of Pentacles','https://www.trustedtarot.com/img/cards/queen-of-pentacles.png'],
			  ['Knight of Pentacles','https://www.trustedtarot.com/img/cards/knight-of-pentacles.png'],
			  ['Page of Pentacles','https://www.trustedtarot.com/img/cards/page-of-pentacles.png'],
			  ['X of Pentacles','https://www.trustedtarot.com/img/cards/ten-of-pentacles.png'],
			  ['IX of Pentacles','https://www.trustedtarot.com/img/cards/nine-of-pentacles.png'],
			  ['VIII of Pentacles','https://www.trustedtarot.com/img/cards/eight-of-pentacles.png'],
			  ['VII of Pentacles','https://www.trustedtarot.com/img/cards/seven-of-pentacles.png'],
			  ['VI of Pentacles','https://www.trustedtarot.com/img/cards/six-of-pentacles.png'],
			  ['V of Pentacles','https://www.trustedtarot.com/img/cards/five-of-pentacles.png'],
			  ['IV of Penatcles','https://www.trustedtarot.com/img/cards/four-of-pentacles.png'],
			  ['III of Pentacles','https://www.trustedtarot.com/img/cards/three-of-pentacles.png'],
			  ['II of Pentacles','https://www.trustedtarot.com/img/cards/two-of-pentacles.png'],
			  ['Ace of Pentacles','https://www.trustedtarot.com/img/cards/ace-of-pentacles.png'],
			]
			,
			n3pthora
		]

// var random = require('../')('dbname')
// var cool = random('cool.txt')

// const storage = (typeof window === 'undefined') ? `./leaf-${id}` : function() {
// 	return randomAccessIDB('hypercore-spike')(`feed-${id}`)
// }

class Matter extends EventEmitter {

	constructor(){
		super()
		EventEmitter.call(this);
	}

	async bootUp() {
		await Fluence.start({connectTo: relayNode}).catch((e) => {console.log('initialization failed')})
	}

	async direct() { 
		const self = this
		let relay
		let denomination
		return { reed: { 
			pull(deck: any) {
					let ran;
					// console.log(ran)
					return async function(compute: any){
						if(compute == 'ϕ'){
							switch(deck){
								case 'tarot':
									denomination = 78
									relay = await getRelayTime(relayNode.peerId)
									ran = Math.floor([...Array(relay % denomination).keys() as any].reduce((x,y) => x + Math.abs(Math.tan(y)))%denomination)
									self.emit('card', {compute: compute, card: decks[0][ran]})
								break;
								case 'n3pthora':
									denomination = 5
									relay = await getRelayTime(relayNode.peerId)
									ran = Math.floor([...Array(relay % denomination).keys() as any].reduce((x,y) => x + Math.abs(Math.tan(y)))%denomination)
									self.emit('card', {compute: compute, card: decks[1][ran]})
								break;
							}
						} else if(compute == '~') {
							ran = Math.floor(Math.random() * 5)
							self.emit('card', {compute: compute, card: decks[1][ran]})
						}
						return true
					}
				}
			}
		}
	}
}

export default Matter
