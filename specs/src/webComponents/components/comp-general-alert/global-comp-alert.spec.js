/**
 * Created by ryan on 2017/9/21.
 */

//var Rreverse = require("src/b").Rreverse;

var utils = require('webComponents/utils/utils.js');
var Mod_alert = require('webComponents/components/comp-general-alert/comp-general-alert.js');


//1.初始化模块

//2.模块的create的方法
//    |___ 参数正确
//    |___ 参数错误

//3.模块的show方法

//4.模块的事件绑定

//4.模块的update方法

//5.模块的hide方法


//测试用例,写断言
describe('自定义alert弹出框的单元测试:', function () {//给测试的段落起一个大标题

    $parent = $('<div class="global-comp-alert"></div>');
    $('body').append($parent);


    it('空用例测试', () => {//行为,这次测试的目的
    });

    it('非实例化alert对象,而是函数调用式', () => {//行为,这次测试的目的

        expect(function(){
            Mod_alert()
        }).toThrow();

    })

    it('实例化alert对象', () => {//行为,这次测试的目的
        mod_alert = new Mod_alert();
        mod_alert = mod_alert;
        expect(mod_alert).toBeTruthy();
    })


    it('创建alert显示对象,参数不正确', () => {
        expect(function(){
            mod_alert.create({})
        }).toThrow();

        mod_alert.show();
        expect($('.global-comp-alert')[0].children.length)
            .toBe(0);
    })

    it('创建alert显示对象,参数正确', () => {//行为,这次测试的目的
        mod_alert.create({
            parent: $('.global-comp-alert')
        });

        mod_alert.show();

        expect($('.global-comp-alert .alertBoxConText')[0].textContent)
            .toBe('关闭评论，将对所有正在使用该创意的计划生效确认关闭评论？');
    })


    it('重复创建alert显示对象', () => {//行为,这次测试的目的
        mod_alert.isCreate=true;
        mod_alert.create({parent: $('.global-comp-alert')});
        // mod_alert.show();
        // expect($('.global-comp-alert .alertBoxConText')[0].textContent)
        //     .toBe('关闭评论，将对所有正在使用该创意的计划生效确认关闭评论？');
    })

    it('更新alert显示对象', () => {//行为,这次测试的目的
        mod_alert.update({
            width: '300',
            height: '100',
            title: '提示',
            image: require('../../../../../images/icon_warn.png'),
            con: '自定义alert弹出框的单元测试',
            sucessCallback: function () {
                //sucesscb && sucesscb();
            },
            cancelCallback: function () {
                //cancelcb && cancelcb();
            }
        });

        $('body').append('<div id="main"><div class="pages-plan-create"></div></div>')
        mod_alert.show();

        expect($('.global-comp-alert .alertBoxConText')[0].textContent)
            .toBe('自定义alert弹出框的单元测试');
    })

    it('主要dom对象获取,并执行绑定事件',()=>{

        $content = $parent.find('.comp-alert-bg');
        $confirm = $parent.find('.mod-foot-row').find('div').eq(0);
        $cancel = $parent.find('.mod-foot-row').find('div').eq(1);
        $closeX = $parent.find('.alertBoxClose');


        expect(function(){ $content.click() }).not.toThrow();
        expect(function(){ $confirm.click() }).not.toThrow();
        expect(function(){ $cancel.click() }).not.toThrow();
        expect(function(){ $closeX.click() }).not.toThrow();
        expect(function(){ $(document).keyup() }).not.toThrow();

    })

    it('删除alert显示对象', (done) => {//行为,这次测试的目的
        mod_alert.hide();
        setTimeout(function () {
            expect($('.global-comp-alert')[0].children.length)
                .toBe(0);
            done();
        }, 1000);
    })

    it('重复删除alert显示对象', () => {//行为,这次测试的目的
        mod_alert.hide();
    })

});

