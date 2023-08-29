$(document).on('movemove', function (e) {
    basket.css('left', e.pageX)
})

function egg_down(egg){
    egg_current_position = parseInt(egg.css('top'))
    egg.css('top', egg_current_position + 2)
}

function check_egg_hits_floor(egg){
    if (collision(egg, floor)) {
        show_bulls_eye(egg)
        return true 
    }
    return false
}

function set_egg_to_initial_position(egg){
    egg.css('top', egg_initial_position)

}

function show_bulls_eye(egg){
    bullseye_num = egg.attr('data-bullseye')
    $('#bulleye' + bullseye_num).show()
    hide_bulls_eye()
}