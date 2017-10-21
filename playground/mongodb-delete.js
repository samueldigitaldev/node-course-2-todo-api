//const MongoClient = require('mongodb').MongoClient;
//ObjectID lets us make new ObjectIDs on the fly
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if (err){
	return console.log('Unable to connect to MongoDB');
}
	console.log('Connected to MongoDB');

/*
	//deleteMany - deletes all
	db.collection('Users').deleteMany({name: 'Sam'}).then((result) => {
		console.log(result);
	});
	deleteOne - deletes first that matches criteria
	db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
		console.log(result);
	});
	

	//findOneAndDelete - you get the data back while deleting so you can display it
	db.collection('Users').findOneAndDelete({_id: new ObjectID("59e7f4f0f373ff37475abbce")}).then((result) => {
		console.log(result);
	});
*/
	//db.close();
});

//deleteMany for all Sam
//findOneAndDelete by ID



//after deleteMany and deleteOne
//at the top is   result: { n: 3, ok: 1 } - n is how many we delete and ok: 1 means things went ok

//findOneAndDelete
/*{ lastErrorObject: { n: 1 },
  value:
   { _id: 59e7f2d80954f0337e3d77f6,
     text: 'Something to do',
     completed: false },
  ok: 1 }*/