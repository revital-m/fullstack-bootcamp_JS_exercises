

function average(teamScore){
    return ((teamScore[0] + teamScore[1] + teamScore[2]/3));
}

function winnerBasketball(mikeTeam , johnTeam, maryTeam) {
    let mikeTeamAverage =  average(mikeTeam);   
    let johnTeamAverage =  average(johnTeam);   
    let maryTeamAverage =  average(maryTeam);
    let winner;
    if (mikeTeamAverage === johnTeamAverage && mikeTeamAverage === maryTeamAverage) {
        winner = 'It is a draw';
    }
    else if (mikeTeamAverage === johnTeamAverage) {
        if (mikeTeamAverage > maryTeamAverage) {
            winner = 'It is a draw between Mike\'s team and John\'s team!';
        }
        else {
            winner = 'The winner is Mary\'s team!';
        }
    }
    else if (mikeTeamAverage === maryTeamAverage) {
        if (mikeTeamAverage > johnTeamAverage) {
            winner = 'It is a draw between Mike\'s team and Mary\'s team!';
        }
        else {
            winner = 'The winner is John\'s team!';
        }
    }
    else if (johnTeamAverage === maryTeamAverage) {
        if (johnTeamAverage > mikeTeamAverage) {
            winner = 'It is a draw between John\'s team and Mary\'s team!';
        }
        else {
            winner = 'The winner is Mike\'s team!';
        }
    }
    else if (mikeTeamAverage > johnTeamAverage) {
        if (mikeTeamAverage > maryTeamAverage) {
            winner = 'The winner is Mike\'s team!';
        }
        else {
            winner = 'The winner is Mary\'s team!';
        }
    }
    else if (johnTeamAverage > maryTeamAverage) {
        winner = 'The winner is John\'s team!';
    }
    else {
        winner = 'The winner is Mary\'s team!';
    }
    return winner;
}

let mikeTeam = [89,120,103]; //104
let johnTeam = [116,94,123]; //111
let maryTeam = [97,134,105]; //112
let winner = winnerBasketball(mikeTeam , johnTeam, maryTeam);
console.log(winner);