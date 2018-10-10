require('./index.less')


function Index() {
    this.$content = $('.content');
    this.$big = $('.big-img');
    this.init();
    this.bindEvent();
}
Index.prototype.init = function() {
    for(var i = 0; i < 5; i ++){
        for(var j = 0 ; j < 5; j ++){
            var rotatez = Math.round(Math.random() * 40 -20);
            var translatex = Math.round(Math.random() * 100 - 50);
            var translatey = Math.round(Math.random() * 100 - 50);
            var translatez = Math.round(Math.random() * 500);
            var oDom = $(`<li><div class="img-box"><img src=./images/${i*5+j+1}.jpg></div></li>`)
            .appendTo(this.$content);
            oDom.css({
                "transition": '1s',
                'transform': 'scale(0.9) rotateZ(' + rotatez + 'deg) translateX(' + translatex+ 'px) translateY(' + translatey+ 'px) translateZ(-' + translatez + 'px)' 
            })
        }
    }
}
Index.prototype.bindEvent = function () {
    this.$li = $('li')
    // console.log(this.$li)
    this.flag = true;
    var self = this;
    this.$li.on('click', function (e) {
        var index = $(this).index();
        self.$li.css({
            transform: 'scale(0) rotateZ(0deg) translateX(0px) translateY(0px) translateZ(0px)'
        })
        self.$content.css({
            display: 'none'
        })
        self.$big.css({
            display: 'block',
            backgroundImage: 'url(./images/' + (index + 1) + '.jpg)'
        })
    })
    this.$big.on('click', function (e) {
        $(this).css({
            display: 'none'
        })
        self.$content.css({
            display: 'block'
        })
        setTimeout(function () {
            self.$li.each(function (ind, ele) {
                var rotatez = Math.round(Math.random() * 40 - 20);
                var translatex = Math.round(Math.random() * 100 - 50);
                var translatey = Math.round(Math.random() * 100 - 50);
                var translatez = Math.round(Math.random() * 500);
                $(ele).css({
                    'transform': 'scale(0.9) rotateZ(' + rotatez + 'deg) translateX(' + translatex + 'px) translateY(' + translatey + 'px) translateZ(-' + translatez + 'px)'
                })
            })
        })
    })
}
new Index();