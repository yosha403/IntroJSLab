function RoomCalculator(){

    let roomLength=parseInt(prompt("Enter the length of the room: "));
    let roomWidth=parseInt(prompt("Enter the width of the room: "));

    let roomArea= roomLength*roomWidth;
    console.log("Area of room: " + roomArea);

    let roomPerimeter=2 * (roomLength+roomWidth);
    console.log("Perimeter of room: " + roomPerimeter);

    let carpetTiles=roomArea/5;
    console.log("Carpet tiles: " + carpetTiles);

    let paintNeeded = roomPerimeter/5;
    console.log("Paint Needed: " + paintNeeded);
}