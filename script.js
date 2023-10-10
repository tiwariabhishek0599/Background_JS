const colors = ['#3498db', '#e74c3c', '#27ae60', '#f39c12', '#8A2BE2', '#7FFF00', '#B01030', '#008B8B', '#7FFF00', '#FF7F50', '#B8860B', '#006400', '#B22222', '#CCAC00', '#FF1493', 'cyan', 'red', 'pink', 'green', 'blue', 'yellow', 'cyan', 'brown', 'orange', '#B22222', '#7FFF00', '#f39c12', '#8A2BE2', '#7FFF00','green'];
let Index = 0;

const colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click', function () {
    colorButton.classList.toggle('button-enlarged');
    document.body.style.backgroundColor = colors[Index];
    Index++;
    if(Index==colors.length)[
        Index = 0
    ]
});
