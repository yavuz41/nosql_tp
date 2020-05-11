db.places.insertOne({name: "TourEiffel", location: {type: "point1"}, coordinates:[]}) #on déclare un array vide pour les coordoonées du point1

db.places.insertOne({name: "MuseeLouvre", location: {type: "point2"},coordinates:[]}) #on déclare un array vide pour les coordoonées du point2

db.places.update({name:"MuseeLouvre"}, {$addToSet: {coordinates: "2.3354553" }}) #on met à jour les coordoonées 
db.places.update({name:"MuseeLouvre"}, {$addToSet: {coordinates: "48.8606111" }}) #on n'oublie pas d'inverser


db.places.insertOne({name: "Pantheon", location: {type : "point3"}, coordinates: []}) #on déclare un array vide pour les coordoonées du point3
 
db.places.update({name: "Pantheon"}, {$addToSet: { coordinates: "48.8462218" }}) #on met à jour les coordoonées
db.places.update({name: "Pantheon"}, {$addToSet: { coordinates: "2.3442251" }}) #on n'oublie pas d'inverser
