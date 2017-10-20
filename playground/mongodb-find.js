//const MongoClient = require('mongodb').MongoClient;
//ObjectID lets us make new ObjectIDs on the fly
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();   this just creates a new Object ID each time

/*object destructuring - lets you pull properties from an obj to create varable
var user = {name: 'andrew', age: 25};
var {name} = user;*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if (err){
	return console.log('Unable to connect to MongoDB');
}
	console.log('Connected to MongoDB');

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch to dos', err);
	// });

/*		db.collection('Todos').find({
		_id: new ObjectID('59e7f2d80954f0337e3d77f6')
	}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch to dos', err);
	});*/

		db.collection('Users').find({
			name: 'Sam'
		}).toArray().then((docs) => {
	/*Cannot use regular string, need to use ObjectID*/
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch to dos', err);
	});

	//db.close();
});

