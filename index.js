function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts) {
  /*var result = [];
  for (var i = 0; i < facts.length; i++) {
    result.push(`${facts[i]}!!!`);
  }
  return result;*/
  return facts.map(fact => `${fact}!!!`)
}

function iLoveTheBeatles(n) {
  var result = [];
  do {
    result.push(`I love the Beatles!`);
  } while (n + result.length < 15)
  return result;
}
