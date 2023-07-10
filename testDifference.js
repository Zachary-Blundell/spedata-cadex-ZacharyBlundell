const inputProperties = ['michel', 'machin', 'verb'];
const authorizedProperties = ['name', 'adjective', 'verb', 'complement'];

const difference = inputProperties.filter((prop) => !authorizedProperties.includes(prop));

console.log(difference);
