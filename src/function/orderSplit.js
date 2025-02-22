function orderSplit(data) {
  const splitData = data.split('=');
  return splitData[1];
}

export { orderSplit }