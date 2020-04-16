export default function Temperature(props) {
  return `${Math.round(props.temp)}${props.tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}`;
}
