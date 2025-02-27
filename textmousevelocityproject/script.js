canvas = document.getElementById("canvas");

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

resizeCanvas();
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

function draw(x,y,s,dir,r) {
    const ctx = canvas.getContext("2d");
    ctx.font = s + "px serif";
    ctx.save(); // Save the current state
    ctx.translate(x, y); // Move the origin to the text's position


    ctx.rotate(dir); // Rotate 45 degrees (adjust the angle as needed)
    ctx.fillText(alphabet[r], 0, 0); // Draw the text at the new origin
    ctx.restore(); // Restore the state after drawing
}

window.addEventListener("resize", resizeCanvas);

addEventListener("mousemove", (event) => {
    const randomNum = Math.floor(Math.random() * 26);
    font_size = ((Math.abs(event.movementX) + Math.abs(event.movementY)))
    console.log((event.movementX), (event.movementY));

    const magnitude = Math.sqrt((event.movementX*event.movementX) + (event.movementY*event.movementY));
    const dir = Math.asin(event.movementY/magnitude)







    draw(event.clientX, event.clientY,font_size,dir,randomNum);
});