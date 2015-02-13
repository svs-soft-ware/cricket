'use strict';

var rss = (function() {
    return {
        parser: function(opt, successCb) {
            var def = $.extend({
                FeedUrl: "",
                MaxCount: 5
            }, opt);

            $.ajax({
                url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
                dataType: "json",
                success: function(data) {
                    successCb && successCb(data);
                }
            });
        }
    };
})();