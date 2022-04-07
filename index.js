var userAnswer = getAnswer(userAnswer, 'left', 'right', 'left or right?');

if(userAnswer.toLowerCase() == 'left'){
    
    userAnswer = getAnswer(userAnswer, 'continue', 'follow', 'You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?');
    
    if(userAnswer.toLowerCase() == 'follow'){
        
        userAnswer = getAnswer(userAnswer, 'stay', 'spread the word','You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.');
        
        if(userAnswer.toLowerCase() == 'stay'){
            window.alert('You live happily amongst the cats for the rest of your days.');
        }
        
        else if(userAnswer.toLowerCase() == 'spread the word'){
            window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.');
        }
    }
    
    else if(userAnswer.toLowerCase() == 'continue'){
        
        userAnswer = getAnswer(userAnswer, 'ladder', 'staircase', 'You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?');
        
        if(userAnswer.toLowerCase() == 'ladder'){
            
            window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.');
        
        }
        
        else if(userAnswer.toLowerCase() == 'staircase'){
            
            window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.');
        
        }
    }
}

else if(userAnswer.toLowerCase() == 'right'){
    
    userAnswer = getAnswer(userAnswer, 'past the dragon', 'away from the dragon', 'You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?');

    if(userAnswer.toLowerCase() == 'past the dragon'){

        userAnswer = getAnswer(userAnswer, 'stay', 'run', 'The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:');
        
        if(userAnswer.toLowerCase() == 'stay'){
            window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.');
        }
        else if(userAnswer.toLowerCase() == 'run'){
            window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.");
        }
    }

    else if(userAnswer.toLowerCase() == 'away from the dragon'){
        
        userAnswer = getAnswer(userAnswer, 'draw it', 'pick it', 'After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?');
        
        if(userAnswer.toLowerCase() == 'draw it'){
            
            window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.');
        
        }
        else if(userAnswer.toLowerCase() == 'pick it')
        {
            window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.');
        }
    }
}

//Used to make sure user input is valid.
function getAnswer(answer, optionOne, optionTwo, prompt){
    answer = window.prompt(prompt);
    while(answer != optionOne && answer != optionTwo)
    {
        answer = window.prompt("I didn't understand. Type " + optionOne + " or " + optionTwo);
    }
    return answer;
}