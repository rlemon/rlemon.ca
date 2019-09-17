import React from 'react';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas eget massa id finibus. Sed faucibus porta pulvinar. Vivamus a magna congue, sollicitudin quam quis, ornare velit. Integer a justo lacinia nulla dictum venenatis. Maecenas sed viverra lacus. Integer lectus nisl, condimentum quis sodales sed, placerat eget mauris. Aenean tincidunt, ligula sed pharetra hendrerit, nunc ligula faucibus ex, porttitor ullamcorper orci dui posuere neque. Nam sollicitudin orci porta, vehicula mauris sit amet, venenatis arcu. Nam eget lacus eu diam efficitur suscipit eu non diam.'

function generateParagraphs(n) {
	return Array.from({length:n},() => <p>{lorem}</p>);
}

export default class Home extends React.Component {

	render() {
		return (  
			<> {generateParagraphs(10)} </>
		);
	}
}