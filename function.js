$(document).on('movemove', function (e) {
    basket.css('left', e.pageX)
})

function egg_down(egg){
    egg_current_position = parseInt(egg.css('top'))
    egg.css('top', egg_current_position + 2)
}

function check_egg_hits_floor(egg){
    if (collision(egg, floor)) {
        show_bulls_eye(egg) //show broken egg
        decrement_life()
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
    hide_bulls_eye(bullseye_num)
}

function hide_bulls_eye(bullseye_num){
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide()

    }, 800)
}

function decrement_life(){
 life--
 life_span.text(life)   
}

function check_egg_hits_basket(egg){
    if(collision(egg, basket)){
        egg_top = parseInt(egg.css('top'))
        if(egg_top < basket_top){
            update_score()
            return true
            
        }
       
    }
    return false 
}

function update_score(){
    score++
    score_span.text(score)
    score_1.text(score)
}