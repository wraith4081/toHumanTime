const floor = (num: number) => ~~num;

export default function fancyTimeFormat(duration: number)
{ 
  if (duration > 185542587187199 || isNaN(parseInt(duration)) || duration <= 0) return null;

  const str = [
    ['day', floor(duration / 86400)], 
    ['hour', floor((duration % 86400) / 3600)], 
    ['minute', floor((duration % 3600) / 60)], 
    ['second', floor(duration % 60)]
  ].map(([name, time], i) => time <= 0 ? '' : `${String(time).padStart(2, '0')} ${name + (time > 1 ? 's' : '')}`).filter(String);
  return (str.length == 1) ? str[0] : str.slice(0, -1).join(', ') + ' and ' + str.slice(-1);
}
