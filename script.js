$(function () {
    the_game = function () {
        if (check_egg_hits_floor(egg1)) {
            set_egg_to_initial_position(egg1)

        }
        egg_down(egg1)
        anim_id = requestAnimationFrame(the_game)
       

    }

    anim_id = requestAnimationFrame(the_game)
})