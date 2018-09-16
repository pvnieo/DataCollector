const express = require('express');
const router = express.Router();

// Connecting to google cloud services
var config = {
  projectId: 'datacollect-illuin',
  keyFilename: '../../src/assets/keys/datacollect-illuin-dacdff2e663c.json'
};

var datastore = require('@google-cloud/datastore')(config);

var id = {
  "1" : 'Tout est clair pour vous ?',
  "2" : 'Vous souhaitez visualiser la liste des missions disponibles actuellement. Comment le demandez-vous ?',
  "3" : 'Comment demanderiez-vous à avoir accès à votre agenda ou emploi du temps ?',
  "4" : 'De quelle manière indiqueriez-vous vos disponibilités ou indisponibilités pour la semaine prochaine ?',
  "5" : 'Et si une de vos indisponibilités concernait mardi prochain ? Comment le formuleriez-vous ?',
  "6" : 'Comment demanderiez-vous le montant de votre droit à acompte ?',
  "7" : 'Et si vous désiriez avoir une avance sur salaire de 200€, comment le formuleriez-vous ?',
  "8" : 'Auriez-vous en tête une ou plusieurs autres fonctionnalités intéressantes à mettre en place  sur notre future application Randstad Youplan ?',
  "9" : 'Avez-vous un compte Facebook ?',
  "10" : 'Avez-vous un compte Messenger ?',
  "11" : "Quel autre canal de messagerie avez-vous l'habitude d'utiliser ?",
  "12" : 'Avez-vous un smartphone ?'
}

require('fs').readFile('interimbot_datacollect.json', 'utf8', function (err, data) {
    if (err) 
       console.log("tnaket");

    var json = JSON.parse(data);
    json.messages.forEach(function(message){
      console.log('hadi pour le test')
      console.log(message.from == "client" && message.hasOwnProperty('stateId') == true);
      if (message.from == "client" && message.hasOwnProperty('stateId') == true) {
        var usr = message.user;
        var _response = message.content.text;
        var _question = id[message.stateId];
        var idd = message.stateId;
        var _date = message.createdAt;
        const kind = 'Randstad_Interimbot';
        const taskKey = datastore.key([kind]);
        const task = {
          key: taskKey,
          data: {
            userId: usr,
            question: _question,
            questionId: idd,
            response: _response,
            createdAt: _date
          },
        };
        datastore
          .save(task)
          .then(() => {
            console.log(`Saved !`);
          })
          .catch(err => {
            console.error('ERROR:', err);
          });
      } else {
        console.log("wa malguit walo");
      }
    });

});
