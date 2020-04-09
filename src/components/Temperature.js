function Temperature(props) {
  return `${props.temp}${props.tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}`;
}

export default Temperature;
