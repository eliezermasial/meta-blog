const awaitingLOading = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default awaitingLOading;
