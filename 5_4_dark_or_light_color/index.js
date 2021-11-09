let color = window.prompt('Choose a color');

(function darkOrLightColor(color){
    switch (color.toLowerCase()) {
        case 'yellow':
        case 'pink':
        case 'orange':
            console.log('light color');
            break;
        case 'blue':
        case 'purple':
        case 'brown':
            console.log('dark color');
            break;
        default:
            console.log('Unknown color');
            break;
    }
    return 0;
})(color);