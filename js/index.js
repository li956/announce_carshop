$(function(){
    //1.全屏切换的初始化
    $('.container').fullpage({
        //2.不垂直居中
        verticalCentered:false,
        //3.设置背景颜色
        sectionsColor:['#fadd67','#84a2d4','#ef674d','#ffeedd','#d04759','#84d9ed','#8ac060'],
        //4.设置指示器
        navigation:true,
        afterLoad:function(link,index){
            //console.log(index.index);
            setTimeout(function(){
                
                $('.section').eq(index.index).addClass('now');
            },200);
        },
        afterRender:function(){
            $('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown();

            });
            $('.screen04 .cart').on('transitionend',function(){
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            //第八屏功能
            // 1.手要跟着鼠标移动
            $('.screen08').on('mousemove',function(e){
                //console.log(e);
                $(this).find('.hand').css({
                    left:e.clientX-180,
                    top:e.clientY-30
                })
            }).find('.again').on('click',function(){
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                // 跳转第一页
                $.fn.fullpage.moveTo(1);
            })
            
            
        },
        onLeave:function(index,nextIndex,direction){
            var currentSection=$('.section').eq(index.index);
            if(index.index==1 && nextIndex.index==2){
                currentSection.addClass('leaved');
            }else if(index.index==2 && nextIndex.index==3){
                currentSection.addClass('leaved');
            }else if(index.index==4 && nextIndex.index==5){
                //5~6
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');

            }else if(index.index==5 && nextIndex.index==6){
                
                $('.screen07 .star img').each(function(i,item){
                   
                    $(item).delay(i*0.5*1000).fadeIn(500);
                });

            }
            
        },

        scrollingSpeed:1000
    })
});