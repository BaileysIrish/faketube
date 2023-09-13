export function formatNumberH(number) {
  if (number >= 10000000) {
    return `${(number / 1000000).toFixed(1)}만명`;
  } else if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}만명`;
  } else if (number >= 100000) {
    return `${(number / 10000).toFixed(1)}만명`;
  } else {
    return String(number);
  }
}

export function formatNumber(number) {
  if (number >= 10000000) {
    return `${(number / 1000000).toFixed(1)}만회`;
  } else if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}만회`;
  } else if (number >= 100000) {
    return `${(number / 10000).toFixed(1)}만회`;
  } else {
    return String(number);
  }
}
