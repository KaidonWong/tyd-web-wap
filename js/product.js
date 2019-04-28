$('.panels').on('click','.panel',function(e) {
    let name = $(this).attr('name');
    self.location=`./product.html?panel=${name}`;
})

$().ready(function() {
    let keyword = "";
    let keywords = window.location.search;
    //删除？
    keywords = keywords.substring(1);
    let keywordArr = keywords.split('&');
    for(let item of keywordArr) {
        let arr = item.split('=');
        if (arr.length != 2) {
            continue;
        }
        let name = arr[0];
        if(name == 'panel') {
            keyword = arr[1];
        }
    }

    if(keyword == "") {

    }else{
        let panel = $(`.${keyword}`);
        if(panel.length != 0) {
            $('.top').css('display','none');
            panel.css('display','block');
            
        }else{

        }
    }
})