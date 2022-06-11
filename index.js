var names;
var character;
var adverb;
var adjective;
const log = console.log;
$(document).ready(function(){
    $('#tell').on('click',function(){
        var input = $('input')
        names=input.first().val()
        character = input.eq(1).val();
        adverb = input.eq(2).val();
        adjective = input.last().val();
        let story = `
        <p>
            One day, my friend <span>${names}</span> was visiting New York and ran\n
            into <span>${character}</span>.<span>${names}</span> ran <span>${adverb}</span> to meet <span>${character}</span>.But\n
            <span>${character}</span> turned out to be very <span>${adjective}</span> and <span>${character}</span> did not\n
            enjoy the meeting.
        </p>`;
        $('#story').append(story);
        $('#story').css('border','1px solid black')
        $('#story').css('font-size','30px')
        $('span').css('color','#27A04A')
    })
});

var height;
var width;
var num_color;
$(document).ready(function(){
    $('#calculate').on('click',function(){
        var input = $('input')
        height = parseInt(input.first().val());
        width = parseInt(input.eq(1).val());
        num_color = parseInt(input.last().val());
        let res = (height*width)/num_color/1000.0;
        res = res.toFixed(2);
        $('#res').append(res);
    })
})
