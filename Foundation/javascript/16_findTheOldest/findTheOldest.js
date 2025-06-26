const findTheOldest = (people) => {
  // insert age for each person.
  const currentYear = new Date().getFullYear()
  people.forEach(person => {
    // the or || operator treats NaN, undefined, null values as falsy.
    // so if person.yearOfDeath doesn't exist, it will be undefined.
    // thus currentYear is assigned to deathYear instead.
    const deathYear = person.yearOfDeath || currentYear;
    person.age = deathYear - person.yearOfBirth;
  })

  // reduce the objects array into a single object with oldest age.
  return people.reduce((oldest, person) => {
    if (person.age > oldest.age) {
      return person // returns person object (which is one element of people array object)
    }
    return oldest; // this is also a person object
    // alternatively use ternary operator
    // condition ? expressionIfTrue : expressionIfFalse
    // return (person.age > oldest.age) ? person: oldest
  })
}

module.exports = findTheOldest;
