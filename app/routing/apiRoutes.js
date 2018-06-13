module.exports = function (app, friends) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var user = req.body;
        var compatibilityScores = []
        var matchName;
        var matchImage;
        
        
        for (var i = 0; i < friends.length; i++) {
            currentFriend = friends[i]
            compatibilityScores[i] = 0
            totalDifference = 0;
            

            for (var j = 0; j < 10; j++) {
                var difference = Math.abs(currentFriend.scores[j] - user.scores[j])
                totalDifference += difference
               
            }
            compatibilityScores[i] = totalDifference
            console.log(compatibilityScores)

        }

        var min = compatibilityScores[0];
        var minIndex = 0;
    
        for (var i = 1; i < compatibilityScores.length; i++) {
            if (compatibilityScores[i] < min) {
                minIndex = i;
                min = compatibilityScores[i];
            }
        }
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        matchName = friends[minIndex].name
        matchImage = friends[minIndex].photo

        console.log(matchName)
        console.log(matchImage)

        friends.push(user)

 
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

      });
    
}