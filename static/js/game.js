!function() {
    const is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    var radius = is_mobi ? 12 : 20;
    var grid = is_mobi ? 9 : 11;
    window.game = new CatchTheCatGame({
        w: grid,
        h: grid,
        r: radius,
        backgroundColor: 0xeeeeee,
        parent: "catch-the-cat",
        statusBarAlign: "center",
        credit: " "
    });
}();