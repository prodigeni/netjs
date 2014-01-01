/*
var ExampleAction = {
	menu: 'Object',
	name: 'Example Action',
	description: '',
	accepts: function(selection) {
		return false;
	},
	run: function(selection) {
		return "Example action completed."
	}
};
*/

addAction({
	menu: 'Object',
	name: 'Clone',
	accepts: function(s) {
		return (s.length == 1);
	},
	run: function(selection) {
		var x = selection[0];

		var y = _.clone( x );
		y.id = uuid();
		y.when = Date.now();
		y.author = self.id();

		self.publish(y);

		return "Cloned to " + y.id;
	}
});
addAction({
	menu: 'Object',
	name: 'Merge',
	description: 'Create a new object containing the content of all those selected',
	accepts: function(s) { return (s.length > 1); 	}
});
addAction({	menu: 'Object',	name: 'Anonymize' });
addAction({	menu: 'Object',	name: 'Touch' });
addAction({	menu: 'Object',	name: 'Encrypt...' });
addAction({	menu: 'Object',	name: 'Decrypt...' });
addAction({	menu: 'Object',	name: 'Delete' });

var allAreSpatial = function(s) {
	for (var i = 0; i < s.length; i++)
		if (!objGeographic(s[i]))
			return false;
	return true;
};
addAction({	menu: 'Space',	name: 'Route Directions...', 
	description: 'Route shortest paths to one or more destinations',
	accepts: allAreSpatial
});
addAction({	menu: 'Space',	name: 'Find Nearby...', 
	description: 'Find nearby objects of certain types within a given range',
	accepts: allAreSpatial
});

addAction({	menu: 'Text',	name: 'Change Case', description: 'UPPERCASE, lowercase, RaNDoMCaSE, & more' });
addAction({	menu: 'Text',	name: 'Separate per line' });
addAction({	menu: 'Text',	name: 'Separate per paragraph' });
addAction({	menu: 'Text',	name: 'Translate' });
addAction({	menu: 'Text',	name: 'Mutate' }); //hackertext, add spelling mistakes



addAction({	menu: 'Share',	name: 'To TeleHash' });
addAction({	menu: 'Share',	name: 'To Twitter' });
addAction({	menu: 'Share',	name: 'To E-Mail' });
addAction({	menu: 'Share',	name: 'To Blog' });
addAction({	menu: 'Share',	name: 'To Forum' });
addAction({	menu: 'Share',	name: 'To Torrent' });
addAction({	menu: 'Share',	name: 'To Printer' });
addAction({	menu: 'Share',	name: 'To G+' });
addAction({	menu: 'Share',	name: 'To FaceBook' });
addAction({	menu: 'Share',	name: 'To Craigslist' });

