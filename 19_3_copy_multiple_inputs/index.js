function clickEvent(first,last){
    if (first.value.length) {
        document.querySelector(`#${last}`).focus();
    }
}