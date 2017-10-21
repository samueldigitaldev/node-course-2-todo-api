//const MongoClient = require('mongodb').MongoClient;
//ObjectID lets us make new ObjectIDs on the fly
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if (err){
	return console.log('Unable to connect to MongoDB');
}
	console.log('Connected to MongoDB');


//findOneAndUpdate
/*	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('59ea91c5f38890eee2b9596e')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal:false
	}).then((result) => {
		console.log(result);
	});*/
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID("59eaa52cf38890eee2b95f7f")
	}, {
		$set: {
			name: 'Sam'
		}, 
		$inc: {
			age: 2
		}
	}, {
		returnOriginal:false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});


//initial documentation for findOneAndUpdate http://mongodb.github.io/node-mongodb-native/2.2/api/
//documentation for update operators https://docs.mongodb.com/manual/reference/operator/update/
//update operators like $inc, $min..etc but we use $set
//findOneAndUpdate has a default returnOriginal to true so we change to false
/*returns
value:
   { _id: 59ea91c5f38890eee2b9596e,
     text: 'eat lunch',
     completed: true },
  ok: 1 }*/