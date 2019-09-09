// seed date format: yyyy-mm-dd
function getNextGameNight(seed) {
  const now = moment();
  const seedDate = moment(seed);

  const dayDiff = now.diff(seedDate, 'days');
  const isSeedAfterNow = dayDiff < 0;

  let nextDate;
  // if seed date is after now, it is the next date show seed
  if (isSeedAfterNow) {
    nextDate = seedDate;
  }
  // else increment seed to correct next date
  else {
    const increment = Math.ceil(dayDiff / 14) * 14;

    nextDate = seedDate.clone().add(increment, 'days');
  }

  return nextDate.format('dddd Do MMMM YYYY');
}

const p = document.querySelector('#date');

p.innerText = getNextGameNight("2019-09-17");

