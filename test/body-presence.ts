// Basic On/Off Wrist Detection
import { BodyPresenceSensor } from 'body-presence';

let body = new BodyPresenceSensor();
body.onreading = () => {
	console.log(`The watch is ${body.present ? '' : 'not'} on the user's body.`);
};
body.start();
