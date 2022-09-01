const floor = (num: number) => ~~num;

export default function fancyTimeFormat(duration: number)
{ 
  const timePeriods = [
    'day',
    'hour',
    'minute',
    'second'
  ];
  const str = [
    floor(
        duration / 86400
    ), 
    floor(
        (duration % 86400) / 3600
    ), 
    floor(
        (duration % 3600) / 60
    ), 
    floor(duration % 60)
  ].map((e, i) => {
    if (e <= 0) return '';
    return `${String(e).padStart(2, '0')} ${timePeriods[i] + (e > 1 ? 's' : '')}`
  }).filter(String);
  if (str.length == 1) return str[0];
  return str.slice(0, -1).join(', ') + ' and ' + str.slice(-1);
}
