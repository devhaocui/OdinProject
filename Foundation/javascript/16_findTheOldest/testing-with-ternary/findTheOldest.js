const findTheOldest = (arrayOfPeople) => {
  // NOTE: Step 1: find out the age of every person.
  arrayOfPeople.forEach(person => {
    const deathAge = person.yearOfDeath || new Date().getFullYear()
    person.age = deathAge - person.yearOfBirth
  })
  // NOTE: Step 2: find the oldest person in the list.
  return arrayOfPeople.reduce((oldest, person) => {
    return oldest.age > person.age ? oldest : person
  })
}

module.exports = findTheOldest;
