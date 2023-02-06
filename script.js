const clock = document.querySelector('.clock');

const time = () => {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds()

//     console.log(hours, minutes, seconds );
    const html = `
        <span>${hours >= 10 ? hours : '0' + hours }</span> :
        <span>${minutes >= 10 ? minutes : '0' + minutes}</span> :
        <span>${seconds >= 10 ? seconds : '0' + seconds }</span>

    `
    clock.innerHTML = html
}

setInterval(time, 1000);