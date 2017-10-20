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

/*	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify((result.ops), undefined, 2));
	});
*/
/*	db.collection('Users').insertOne({
		name: 'Sam',
		age: 23,
		location: 'Toronto'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert Users', err);
		}
		console.log(result.ops[0]._id.getTimestamp());
	});*/

	//result.ops is an array of all elements inserted

	db.close();
});

