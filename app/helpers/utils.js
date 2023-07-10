export default {
  getRandomIntInclusive(min, max) {
    const minRounded = Math.ceil(min);
    const maxRounded = Math.floor(max);
    return Math.floor(Math.random() * (maxRounded - minRounded + 1) + minRounded);
  },

  getRandomItem(collection) {
    const randomIndex = this.getRandomIntInclusive(0, collection.length - 1);
    return collection[randomIndex];
  },
};
