/**
 * Easter Egg: Welcome visitors who dare to take a look inside the console... ;)
 */
export function greetingsConsole() {
    let greetings = 'Hello there!\n';
    greetings += '\n';
    greetings += 'I\'m very pleased that you\'re taking a look at the console ;)\n';
    greetings += '\n';
    greetings += 'An important question:\n';
    greetings += 'Why don’t programmers like nature?\n';
    for (let tensionBuildUp = 0; tensionBuildUp < 3; tensionBuildUp++) {
        greetings += '...\n';
    }
    greetings += 'It has too many bugs.\n';
    greetings += '\n';
    greetings += 'That was a really cool joke, wasn\'t it?\n';
    greetings += '\n';
    greetings += 'If you want to find more Easter Eggs, have a look at my Github account!\n';
    greetings += 'https://github.com/CrazyChair69\n';
    greetings += 'Maybe you\'ll find more...\n';
    greetings += '\n';
    greetings += 'I am open to job offers!\n';
    greetings += 'You can reach me at: christian-schwanse@gmx.net\n';

    console.log(greetings);
}