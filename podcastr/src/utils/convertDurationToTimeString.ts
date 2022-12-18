export function convertDurationToTimeString(duration: number){
    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

    return timeString;
}

// recebe a duration em segundos e converte em horas (duration /3600)    Math.floor para arredontar para baixo caso nao tenha nenhuma hora
// pois pode dar 0,88 e no caso, é que não tem nenhuma hora


// minution = pega os segundos que sobram e divide por 60 e vai ter o numero de minutos

