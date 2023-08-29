$(function () {
    the_game = function () {
        console.log(123)
        anim_id = requestAnimationFrame(the_game)
        cancelAnimationFrame(anim_id)

    }

    anim_id = requestAnimationFrame(the_game)
})