export function fetchDeck(){
    return{
        type:"FETCH_DECK"
    }
}
export function setAICards(deck){
    let deckClone = JSON.parse(JSON.stringify(deck));
    for(var i=0;i!=2;i++){
        const randomIndex = Math.floor(Math.random()*deckClone.deck.length);
        deckClone.aiCards.push(deckClone.deck[randomIndex]);
        deckClone.deck.splice(randomIndex,1);
    }
    return{
        type:"SET_AI_CARDS",
        payload:deckClone
    }
}
export function setUserCards(deck){
    let deckClone = JSON.parse(JSON.stringify(deck));
    for(var i=0;i!=2;i++){
        const randomIndex = Math.floor(Math.random()*deckClone.deck.length);
        deckClone.userCards.push(deckClone.deck[randomIndex]);
        deckClone.deck.splice(randomIndex,1);
    }
    return{
        type:"SET_AI_CARDS",
        payload:deckClone
    }
}
export function hitAi(deck){
    const randomIndex = Math.floor(Math.random()*deck.length);
    const newAiCard = deck[randomIndex];

    return{
        type:"HIT_AI",
        payload:newAiCard
    }
}
export function hitUser(deck){
    const randomIndex = Math.floor(Math.random()*deck.length);
    const newUserCard = deck[randomIndex];

    return{
        type:"HIT_USER",
        payload:newUserCard
    }
}
