function upCurtain() {
    var curtain = document.getElementById('curtain');
    curtain.style.transition = 'bottom 1s';
    curtain.style = 'bottom: 100vh';
}

function downSwitcher() {
    var switcher = document.getElementById('lamp-switcher');
    switcher.style.top = '13vh';
}

function upSwitcher() {
    var switcher = document.getElementById('lamp-switcher');
    switcher.style.top = '6vh';
}

function turnLight() {
    var light = document.getElementById('light');
    var magican = document.getElementById('magican');
    var hat = document.getElementById('hat');
    var pigeon = document.getElementById('pigeon');
    var rabbit = document.getElementById('rabbit');

    if (light.className == 'lightoff') {
        light.className = 'lighton';
        magican.style.opacity = '1';
        hat.style.opacity = '1';
        rabbit.style.opacity = '1';
        pigeon.style.opacity = '1';
    }
    else {
        light.className = 'lightoff';
        magican.style.opacity = '0';
        hat.style.opacity = '0';
        rabbit.style.opacity = '0';
        pigeon.style.opacity = '0';
    }

}

function showPigeon() {
    var pigeon = document.getElementById('pigeon');
    var rabbit = document.getElementById('rabbit');
    pigeon.style.transition = 'bottom 0.5s 0.5s, opacity 0.8s'
    rabbit.style.transition = 'bottom 0.5s 0s, opacity 0.8s'
    pigeon.style.bottom = '40vh';
    rabbit.style.bottom = '10vh';
}

function showRabbit() {
    var pigeon = document.getElementById('pigeon');
    var rabbit = document.getElementById('rabbit');
    rabbit.style.transition = 'bottom 0.5s 0.5s, opacity 0.8s'
    pigeon.style.transition = 'bottom 0.5s 0s, opacity 0.8s'
    rabbit.style.bottom = '40vh';
    pigeon.style.bottom = '10vh';
}