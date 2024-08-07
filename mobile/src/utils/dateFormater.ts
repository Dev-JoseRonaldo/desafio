import { differenceInDays, differenceInHours, differenceInMonths, differenceInWeeks, differenceInYears, parseISO } from 'date-fns';

export function timeForNow(dateString: string): string {
  const date = parseISO(dateString);
  const now = new Date();

  const hours = differenceInHours(now, date);
  if (hours < 48) {
    return `há ${hours} hora${hours !== 1 ? 's' : ''} atrás`;
  }

  const days = differenceInDays(now, date);
  if (days < 7) {
    return `há ${days} dia${days !== 1 ? 's' : ''} atrás`;
  }

  const weeks = differenceInWeeks(now, date);
  if (weeks < 5) {
    return `há ${weeks} semana${weeks !== 1 ? 's' : ''} atrás`;
  }

  const months = differenceInMonths(now, date);
  if (months < 13) {
    return `há ${months} mês${months !== 1 ? 'es' : ''} atrás`;
  }

  const years = differenceInYears(now, date);
  return `há ${years} ano`;
}