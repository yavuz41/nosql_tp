db.createCollection("sport");

db.sport.insert([{ name: "badminton", nb_joueur: 2, objet: "raquette" }, { name: "handball", nb_joueur: 6, objet: "balle" }]);

db.sport.update({name:"badminton"}, {title:"badminton",require_teams:false}, {upsert:true})
db.sport.update({name:"handball"}, {title:"handball",require_teams:true}, {upsert:true})

db.sport.update({require_teams:true}, {minimum_player:1},{upsert:true})

db.sport.update({minimum_player:$inc:10});