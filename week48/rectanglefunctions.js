/*
 * 1. Zet de onderstaande losse functies en variabelen
 *    om in een rectangle class.
 *
 * 2. De draw functie moet een method worden van de class.
 *
 * 3. Teken een rectangle door het aanroepen van de class.
 *
 * 4. Extra bonus punten kun je verdienen
 *    als je de rectangle laat draaien dmv een rotate method.
 *    Toegestane waarden zijn portrait en landscape,
 *    denk maar aan je telefoon.
 *
 * 5. Weet je niet exact hoe een canvas werkt
 *    zet je commentaar bij de regels waar nu Commentaar staat.
 */

const id = document.getElementById('canvas');

let xPos = 10;
let yPos = 10;
let width = 300;
let height = 100;

let orientation = 'portrait';

function draw(penWidth, color, id) {

    // Commentaar
    let context = id.getContext('2d');

    // Commentaar
    context.beginPath();

    // Commentaar
    context.strokeStyle = color;
    context.lineWidth = penWidth;

    // Commentaar
    context.moveTo(xPos, yPos);

    // Commentaar
    context.lineTo(xPos, yPos + height);
    context.lineTo(xPos + width, yPos + height);

    context.lineTo(xPos + width, yPos);
    context.lineTo(xPos, yPos);

    // Commentaar
    context.stroke();
}

let shape = draw('4', 'green', id);

