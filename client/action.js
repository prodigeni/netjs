addAction({
	menu: 'Object',
	name: 'Clone',
	accepts: function(s) {
		return (s.length == 1);
	},
	run: function(selection) {
		var x = selection[0];

		var y = _.clone( self.getObject(x) );
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
	accepts: function(s) { return (s.length > 1); 	}
});
addAction({
	menu: 'Share',
	name: 'To Twitter',
	accepts: function(s) { return (s.length == 1); 	}
});
addAction({
	menu: 'Share',
	name: 'To G+',
	accepts: function(s) { return (s.length == 1); 	}
});

