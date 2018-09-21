/**
 * @file mip-close-dom 组件
 * @author
 */

define(function (require) {
    'use strict';
    var customElement = require('customElement').create();

    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
        function vartical(obj, time, smtime) {
            var Object = obj;
            var FunTime = time; // 调用这个函数的时间
            var ActTime = smtime; // 执行动画过程
            setInterval(function () {
                $(Object).animate(
                    {
                        marginTop: -parseInt($(Object).find('li').css('line-height'), 10)
                    }, ActTime, function () {
                        $(this).css({
                            marginTop: 0
                        }).find('li:first-child').appendTo(this);
                    });
            }, FunTime);
        }
    };
    return customElement;
});
