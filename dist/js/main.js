$(window).resize(function() {
    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover'
        });
    });
    initSameHeight();
    // Вызов кастомного скролла
    /*$('.scroll-pane').jScrollPane();*/

    setTimeout(function() {
        initMicroColumnWidth();
    }, 500);

    brandlineButtonWidth();

    // weekend height
    blockBottomHeight();

    // dotted

    dotted();

    $('.weekend-heading').dotdotdot({

    });
    $('.weekend-text').dotdotdot({

    });

    modalHeight();

    $('#myModal3').on('shown.bs.modal', function(e) {
        modalBodyHeight();
    });


});



$(document).ready(function() {



    // initialize with defaults
    $("#input-4").fileinput({
        showCaption: false,
        fileSizeGetter: true,
        showUpload: false,
        browseLabel: 'Загрузить файл',
        showRemove: false,
        msgLoading: 'Загрузка файла',
        layoutTemplates: {
            btnBrowse: '<div class="col-md-3 col-md-pull-9"><div tabindex="500" class="{css}"{status}><img src="assets/png/upload.png">{label}</div></div>',
            main1: '{preview}\n' +
                
                '<div class="input-group {class}">\n' +
                '   {caption}\n' +
                '   <div class="input-group-btn">\n' +
                '       {remove}\n' +
                '       {cancel}\n' +
                '       {upload}\n' +
                '       {browse}\n' +
                '   </div>\n' +
                '</div>',
            main2: '{preview}\n<div class="kv-upload-progress hidden"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n',

            preview: '<div class="col-md-9 col-md-push-3"><div class="file-preview {class}">\n' +
                '    {close}\n' +
                '    <div class="close fileinput-remove">×</div>\n' +
                '    <div class="{dropClass}">\n' +
                '    <div class="file-preview-thumbnails">\n' +
                '    </div>\n' +
                '    <div class="clearfix"></div><div class="meter orange nostripes"><span style="width: 100%"></span></div>' +
                '    <div class="file-preview-status text-center text-success"></div>\n' +
                '    <div class="kv-fileinput-error"></div>\n' +
                '    </div>\n' +
                '</div></div>',
            
            icon: '<span class="glyphicon glyphicon-file kv-caption-icon"></span>',
            caption: '<div tabindex="-1" class="form-control file-caption {class}">\n' +
                '   <div class="file-caption-name"></div>\n' +
                '</div>',
            btnDefault: '<button type="{type}" tabindex="500" title="{title}" class="{css}"{status}>{icon}{label}</button>',
            btnLink: '<a href="{href}" tabindex="500" title="{title}" class="{css}"{status}>{icon}{label}</a>',

            modalMain: '<div id="kvFileinputModal" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="kvFileinputModalLabel"></div>',
            modal: '<div class="modal-dialog modal-lg{rtl}" role="document">\n' +
                '  <div class="modal-content">\n' +
                '    <div class="modal-header">\n' +
                '      <div class="kv-zoom-actions pull-right">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
                '      <h3 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h3>\n' +
                '    </div>\n' +
                '    <div class="modal-body">\n' +
                '      <div class="floating-buttons"></div>\n' +
                '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>\n',

            footer: '<div class="file-thumbnail-footer">\n' +
                '    <div class="file-caption-name" style="width:{width}"><img src="assets/png/play@2x.png">{caption}<br> {size}</div>\n' +
                '    {progress} {actions}\n' +
                '</div>',

            actions: '<div class="file-actions hidden">\n' +
                '    <div class="file-footer-buttons">\n' +
                '        {upload} {delete} {zoom} {other}' +
                '    </div>\n' +
                '    {drag}\n' +
                '    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n' +
                '    <div class="clearfix"></div>\n' +
                '</div>',
            actionDelete: '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}"{dataUrl}{dataKey}>{removeIcon}</button>\n',
            actionUpload: '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>\n',
            actionZoom: '<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>',
            actionDrag: '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>'

        }
    }).on('fileselect', function(event, numFiles, label) {
        console.log("fileselect");
        $('.meter').css('opacity', '0');
        setTimeout(function() {
            $(".meter").css('opacity', '1');
            $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
        }, 500);

    });;

    $('#myModal3').on('shown.bs.modal', function(e) {
        modalBodyHeight();
    });

    //dotted

    dotted();

    $('.weekend-heading').dotdotdot({

    });
    $('.weekend-text').dotdotdot({
        ellipsis: '...',
        watch: true,
        wrap: 'letter',
        height: 20 * 3, // max number of lines
    });
    $('.weekend-text.full').dotdotdot({
        ellipsis: '...',
        watch: true,
        wrap: 'letter',
        height: 20 * 4, // max number of lines
    });




    checkedCount();

    blockBottomHeight();

    // Раскрытие левого меню
    $(".js__arrow").click(function() {
        $(".sidebar").toggleClass("active");
        $(this).toggleClass("active");
    });

    var a = $('.js-detail').attr('aria-expanded');
    if (a == 'true') {
        $('.js-detail').html('Скрыть');
    }

    // Tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
            trigger: 'hover'
        });
    })

    $('.tools__delete').click(function() {
        $(this).closest('.tools__editing_item').remove();
    });

    // Вызов карусели на странице редактирования маршрутов
    $(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        nav: true,
        navText: ['<svg class="icon icon-ico35"><use xlink:href="#icon-ico35"></use></svg> <span>предыдущая неделя</a>', '<span>следующая неделя</span> <svg class="icon icon-ico36"><use xlink:href="#icon-ico36"></use></svg>']
    });


    $(".fancy").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });



    // Вызов кастомного скролла
    $('.scroll-pane').jScrollPane();

    // Обрезка текста многоточием
    $('.route__info').dotdotdot();



    // tools panel
    $('#tools_map').on('show.bs.tab', function(e) {
        $('.form-horizontal--inline').show();
        $('.tools-pagination').hide();
        $('.tools__panel--right').hide();

    });
    $('#tools_table').on('show.bs.tab', function(e) {
        $('.form-horizontal--inline').hide();
        $('.tools-pagination').show();
        $('.tools__panel--right').show();
    });




    // Same height

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        initSameHeight();
    });

    $('#collapseExample').on('hidden.bs.collapse', function() {
        initSameHeight();
    });

    $('#collapseExample').on('shown.bs.collapse', function() {
        initSameHeight();
    });



    // Bootstrap select
    $('.selectpicker').selectpicker({
        dropupAuto: false,
        noneSelectedText: 'Ничего не выбрано',
        liveSearchPlaceholder: 'Поиск'
    });

    $('#select-default').selectpicker();


    $('.add__product:eq(0)').find('.color__list').append('<li class="color__item js-color"></li>');
    $('.color-input').each(function(i, elem) {

        var hueb = new Huebee(elem, {
            // options
            staticOpen: true,
            setBGColor: '.js-color',
            setText: '.asdasdasd'
        }).on('change', function(color, hue, sat, lum) {
            /*$('.js-color').css('background', color);*/
            $('.add__product').find('.color__list').find('.js-color:eq(0)').css('background', color);
            colorGlobal = color;
        });
    });


    colorGlobal = '';

    // Добавление брендлайна
    initAddBrandline();

    // Добавление строки с ценой
    initAddRow();

    //Добавление размера к брендлайну
    initAddSize();

    // Удаление строки с ценой
    initDeleteTr();

    // Удаление размера брендлайна
    initDeleteSize();

    // Переключение цен
    togglePrice();

    // Пересчет маршрутов в колонке
    initCheckedPortlets();

    //Выделение маршрутов
    initSelectable();

    // Перетаскивание маршрутов
    initSortable();

    // переключение форм в модальном окне
    initModalForm();

    // Вызов модального окна в маршруте
    initModalOnPortlets();

    // выбор цвета
    initColor();


    // Удаление брендлайна
    initRemoveBrandline();


    // загрузка изображения для предпросмотра
    initImagesUpload();


    // ввод размера
    keyUpSize();


    // ввод первой ценовой категории
    keyUpF1();

    // ввод второй ценовой категории
    keyUpF2();

    brandlineButtonWidth();


    // datepicker 

    initDateTimePicker();


    // checked all 

    checkAll();

    modalHeight();






    // установка начальных значений в предпросмотре
    var val_first = $('.add__size_block input').val();
    $('.add__table_td_size').text(val_first);




    var val_price_first = $('.add__price_td_f1 input').val();
    var val_price_second = $('.add__price_td_f2 input').val();
    var val_size = $('.add__size_block input').val();
    $('.add__price_view--f1').text(val_price_first);
    $('.add__price_view--f2').text(val_price_second);
    $('.add__table_td_size').text(val_size);

    initMicroColumnWidth();



    $('#comment').click(function() {
        $('.textarea-tool').addClass('active');
    });


});





function initMicroColumnWidth() {
    var micro__wr = $('.micro__wr').outerWidth();
    var diagramm = $('.diagramm').outerWidth();
    var width = $('.nav-micro').find('li:eq(0)').outerWidth() + $('.nav-micro').find('li:eq(1)').outerWidth() + $('.nav-micro').find('li:eq(2)').outerWidth() + $('.nav-micro').find('li:eq(3)').outerWidth();


    var micro__right = micro__wr - width;

    var grafik = diagramm - width;
    $('.micro__left').css('width', width);
    $('.diagramm__left').css('width', micro__right);

    $('.micro__right').css('width', micro__right);
    $('.grafik').css('width', grafik);
}




function modalHeight() {
    var h = $(window).height();
    var hDifference = $(window).height() - 200;
    var hSmall = $(window).height();

    if (hSmall < 800) {
        $('#myModal3').find('.modal-dialog--lg').height(578);


    } else if (hSmall < 601) {
        $('#myModal3').find('.modal-dialog--lg').css({ 'top': '0!important' });
    } else {
        $('#myModal3').find('.modal-dialog--lg').height(hDifference);
    }
}








// Функция ввода размера
function keyUpSize() {
    $(document).on('keyup', '.add__size_block input', function() {
        var number_size = $(this).closest('.add__info').index();
        var value = $(this).val();

        $(this).closest('.add__product').find('.add__info--view').find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr:eq(0)').find('.add__table_td_size').text(value);
    });
}


// Функция ввода ценовой категории
function keyUpF1() {
    $(document).on('keyup', '.add__price_td_f1 input', function() {
        var number_size = $(this).closest('.add__info').index();
        var number_tr = $(this).closest('.add__product').closest('.add__tr--dynamic').index();
        var value = $(this).val();

        $(this).closest('.add__product').find('.add__info--view').find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr:eq(' + number_tr + ')').find('.add__price_view--f1').text(value);
    });
}

// Функция ввода ценовой категории
function keyUpF2() {
    $(document).on('keyup', '.add__price_td_f2 input', function() {
        var number_size = $(this).closest('.add__info').index();
        var number_tr = $(this).closest('.add__product').closest('.add__tr--dynamic').index();
        var value = $(this).val();

        $(this).closest('.add__product').find('.add__info--view').find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr:eq(' + number_tr + ')').find('.add__price_view--f2').text(value);
    });
}


$('.js_delete_tr').hide();


// Добавление строки с ценой
function initAddRow() {
    $(document).on('click', '.js__add_row', function() {
        var number_tr = $(this).closest('.add__tr--dynamic').index();

        var number_size = $(this).closest('.add__info').index();

        var row = $(this).parents(".row").find('.js__add_row').closest('.add__tr--dynamic').clone().wrap('<div></div>').parent().html();
        var row1 = '<div class="add__tr add__tr--dynamic"><div class="add__td add__size_block add__size_block--td"><input type="text" class="form-control form-control--size" value="21-23"></div><div class="add__td add__price_category add__price_category--td"><select name="" id="" class="selectpicker"><option value="">минимаркет</option><option value="">HoReca</option></select></div><div class="add__td add__price add__price--td add__price_td_f1"><input type="text" class="form-control--table form-control" value="6 112, 45"></div><div class="add__td add__price add__price--td add__price_td_f2"><input type="text" class="form-control--table form-control" value="6 500, 45"></div><div class="add__plus add__td"><div class="add__holder add__holder--big js__add_row"><svg class="icon icon-plus"><use xlink:href="#icon-plus"></use></svg></div></div><div class="add__td"><div class="add__delete js_delete_tr"><svg class="icon icon-ico33 icon__gray"><use xlink:href="#icon-ico33"></use></svg></div></div></div></div>';

        $(this).closest('.add__tr').after(row1);

        $(this).closest('.add__tr').next('.add__tr').find('.add__size_block input').remove();

        /*$(this).closest('.add__product').find('.preview__table:eq(' + number_size + ')').append('<div class="preview__table_tr"><div class="add__table_td_size preview__table_td"></div><div class="preview__table_td"></div><div class="preview__table_td add__price_view add__price_view--f1"></div><div class="preview__table_td add__price_view add__price_view--f2"></div></div>');*/

        $(this).closest('.add__tr--dynamic').next('.add__tr--dynamic').find('.selectpicker').selectpicker();


        $(this).closest('.add__tr--dynamic').next('.add__tr--dynamic').find('.js_delete_tr').show();




        /*var f1 = $(this).closest('.add__tr').find('.add__price_td_f1 input').val();

        var f2 = $(this).closest('.add__tr').find('.add__price_td_f2 input').val();

        $(this).closest('.add__product').find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr:eq(' + number_tr + ')').find('.add__price_view--f1').text(f1);

        $(this).closest('.add__product').find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr:eq(' + number_tr + ')').find('.add__price_view--f2').text(f2);*/
    });




}

//Добавление блока размера
function initAddSize() {
    $(document).on('click', '.js_add_size', function() {
        var parent_size = $(this).closest(".add__product_wrapper").find('.add__product--pattern').find('.add__info:first-child').clone().wrap('<div></div>').parent().html();

        $(parent_size).insertBefore(this);

        $(this).closest('.add__product').find('.add__info--view').append('<div class="preview__table"><div class="preview__table_tr"><div class="add__table_td_size preview__table_td"></div><div class="preview__table_td"></div><div class="preview__table_td add__price_view add__price_view--f1"></div><div class="preview__table_td add__price_view add__price_view--f2"></div></div></div>');

        $(this).closest('.add__info--wr').find('select').selectpicker();

        var number_tr = $(this).closest('.add__tr--dynamic').index();
        /*$(this).closest('.add__product').find('.preview__table').find('.preview__table_tr:eq(' + number_tr + ')');*/

        var f1 = $(this).closest('.add__info--wr').find('.add__tr').find('.add__price_td_f1 input').val();

        var f2 = $(this).closest('.add__info--wr').find('.add__tr').find('.add__price_td_f2 input').val();

        var sz = $(this).closest('.add__info--wr').find('.add__info').find('.add__size_block input').val();

        $(this).closest('.add__product').find('.preview__table:eq(' + number_tr + ')').find('.add__price_view--f1').text(f1);

        $(this).closest('.add__product').find('.preview__table:eq(' + number_tr + ')').find('.add__price_view--f2').text(f2);

        $(this).closest('.add__product').find('.preview__table:eq(' + number_tr + ')').find('.add__table_td_size').text(sz);

        $(this).closest('.add__product').find('.js_delete_size').css('visibility', 'visible');

    });

}

// ширина кнопки добавления брендлайна
function brandlineButtonWidth() {
    var width = $('.add__product .add__item').outerWidth();
    $('.js_add_block').outerWidth(width);

}

// добавление брендлайна
function initAddBrandline() {
    var pattern = $('.add__product_wrapper').find('.add__product--pattern').clone();
    $('.js-product-delete').hide();
    $(document).on('click', '.js_add_block', function() {

        if ($('.add__product_wrapper').find('.add__product').length > 0) {
            $('.add__product_wrapper').find('.add__product').find('.js-product-delete').show();
        }

        var number_br = $(this).closest('.add__product').index();

        // Шаблон брендлайна
        var parent = $('.js_add_block').closest('.add__product_wrapper');

        $(pattern).addClass('add__product').removeClass('add__product--pattern');

        $(parent).append(pattern.clone().show());
        initImagesUpload();


        // проставляем айди для input file

        var i = 0;
        $(this).closest('.add__product_wrapper').find('.input-file').each(function() {
            i++;
            $(this).attr("id", "file-image-" + i);
            $(this).siblings('label').attr('for', "file-image-" + i);
        });

        // Вызываем плагин для селекта по айди
        y = 0;
        $(this).closest('.add__product_wrapper').find('.add__brand select').each(function() {
            y++;
            $(this).attr("id", "select-" + y);
            var id = "select-" + y;

            $("#select-" + y).selectpicker();
        });

        // скролл к верху нового брендлайна

        $('html, body').animate({
            scrollTop: $(this).closest('.add__product').next('.add__product').offset().top
        }, 700);

        // Вызываем плагин для селекта
        //
        $(this).closest('.add__product').next('.add__product').find('.add__info--wr').find('.add__info:first-child').find('select').selectpicker();

        var colorInput = $(this).closest('.add__product').next('.add__product').find('.color-input').get(0);



        // Имя брендлайна

        $('.add__brand select').on('changed.bs.select', function(e) {
            var prod_name = $(this).closest('.add__product').find('.add__brand .filter-option').text();

            $(this).closest('.add__product').find('.add__name').text(prod_name);
        });

        $(this).closest('.add__product').next('.add__product').find('.add__brand .selectpicker').selectpicker();


        $(this).closest('.add__product').next('.add__product').find('.add__brand > .bootstrap-select > button').remove();







        // Добавление цВета






        var li_prev = $(this).closest('.add__product').find('.color__list').html();






        $(this).closest('.add__product').next('.add__product').find('.color__list').append(li_prev);

        $('.add__product').find('.color__list').append('<li class="color__item js-color"></li>');

        $('.add__product').find('.color__list').find('.js-color:eq(' + number_br + ')').each(function(i, elem) {


            var colorOutput = elem;
            var color = '#f00';
            $(colorOutput).css('background', colorGlobal);

            // Вызов цветовой гаммы

            var hueb = new Huebee(colorInput, {
                // options
                staticOpen: true,
                setBGColor: colorOutput,
                setText: '.asdasdasd'
            }).on('change', function(color, hue, sat, lum) {
                $(colorOutput).css('background', color);
                $('.add__product').find('.color__list').find('.js-color:eq(' + number_br + ')').css('background', color);
                colorGlobal = color;
            });
        });








        $(this).closest('.add__product').find('.color__list').slick({
            infinite: false,
            vertical: true,
            verticalSwiping: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });







        $(this).closest('.add__product').prevAll('.add__product').find('.color__list').slick('unslick');


        if (!($('.add__product').find('.color__list').hasClass('.slick-slider'))) {
            $(this).closest('.add__product').prevAll('.add__product').find('.color__list').slick({
                infinite: false,
                vertical: true,
                verticalSwiping: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>'
            });
        }






        /*$('.color__list').slick('slickAdd', '<li class="color__item js-color"></li>');*/








        $('.add__product').each(function(i) {

            if ($('.add__product:eq(' + i + ')').find('.add__info').length <= 1) {
                $('.add__product:eq(' + i + ')').find('.js_delete_size').css('visibility', 'hidden');
            } else {
                $('.add__product:eq(' + i + ')').find('.js_delete_size').css('visibility', 'visible');
            }
        });
        initSameHeight();




    });
}

// удаление строки с ценой
function initDeleteTr() {
    $(document).on('click', '.js_delete_tr', function() {

        var parent = $(this).closest('.add__info');

        var parent_view = $(this).closest('.add__product').find('.add__info--view');

        var number_size = $(this).closest('.add__info').index();

        var number_tr = $(this).closest('.add__info').find('.add__tr--dynamic').index();



        if (parent_view.find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr').length > 1) {
            $(this).closest('.add__product').find('.preview__table:eq(' + number_size + ')').find('.preview__table_tr:eq(' + number_tr + ')').remove();
        }


        if (parent.find('.add__tr--dynamic').length > 1) {
            $(this).closest('.add__tr--dynamic').remove();
        }

    });
}

$('.add__product').each(function(i) {

    if ($('.add__product:eq(' + i + ')').find('.add__info').length <= 1) {
        $('.add__product:eq(' + i + ')').find('.js_delete_size').css('visibility', 'hidden');
    } else {
        $('.add__product:eq(' + i + ')').find('.js_delete_size').css('visibility', 'visible');
    }
});

// удаление размера
function initDeleteSize() {
    $(document).on('click', '.js_delete_size', function() {
        var parent = $(this).closest('.add__product');
        var number_size = $(this).closest('.add__info').index();


        if (parent.find('.preview__table').length > 1) {
            $(this).closest('.add__product').find('.preview__table:eq(' + number_size + ')').remove();
        }
        if (parent.find('.add__info').length > 1) {
            $(this).css('visibility', 'visible');
            $(this).closest('.add__info').remove();
        } else {
            $(this).css('visibility', 'hidden');
        }

        $('.add__product').each(function(i) {

            if ($('.add__product:eq(' + i + ')').find('.add__info').length <= 1) {
                $('.add__product:eq(' + i + ')').find('.js_delete_size').css('visibility', 'hidden');
            } else {
                $('.add__product:eq(' + i + ')').find('.js_delete_size').css('visibility', 'visible');
            }
        });
    });
}

// удаление продукта
function initRemoveBrandline() {
    $(document).on('click', '.js-product-delete', function() {
        /*$(this).closest('.add__product').prev('.add__product').find('.js_add_block').show();*/

        var number_br = $('.add__product').index();


        var lg = $(this).closest('.add__product_wrapper').find('.add__product').length;

        if (lg > 1) {
            $(this).closest('.add__product').remove();

            $(this).closest('.add__product').find('.color__list').slick({
                infinite: false,
                vertical: true,
                verticalSwiping: false,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>'
            });
            $('.add__product').find('.color__list').slick('unslick');
            $('.add__product').find('.color__list').find('.color__item:eq(' + number_br + ')').remove();
        }








    });
}

// переключение между ценами
function togglePrice() {
    $(document).on('click', '.f__item', function() {
        // remove classes from all
        $(this).closest('ul').find('.f__item').removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
        var parent = $(this).closest('.add__product');
        if ($(this).closest('ul').find('.f__item:eq(1)').is('.active')) {
            parent.find('.add__price_view--f1').hide();
            parent.find('.add__price_view--f2').css('display', 'inline-block');
        } else {
            parent.find('.add__price_view--f1').css('display', 'inline-block');
            parent.find('.add__price_view--f2').hide();
        }
    });
}







$('.add__brand select').on('changed.bs.select', function(e) {
    var prod_name = $(this).closest('.add__product').find('.add__brand .filter-option').text();

    $('.add__name').text(prod_name);
});





var countClick = 0;
$('.portlet').on('mouseover', function() {
    if (!(window.event.ctrlKey) && !(window.event.shiftKey)) {
        $('.handle').css('z-index', '2').focus();
        $('.handle').trigger('mousedown');
    } else {
        $('.handle').css('z-index', '0');
        $('.portlet').focus();
    }
});


// Функция выделения маршрута
function initSelectable() {

    $('.column').selectable({
        cancel: '.handle, .route-footer, .portlet-remove, .copy',
        filter: ".portlet",
        selected: function(event, ui) {
            countClick++;
            if (!(window.event.ctrlKey) && !(window.event.shiftKey)) {
                $('.portlet').removeClass('ui-selected');
            }
        },
        stop: function(event, ui) {
            $('#check-2').prop('checked', false);
            var lg_checked = $('.column__left').find('.portlet.ui-selected').length;
            $('.js_checked_portlets').text(lg_checked);
        }
    });
}



// Функция перетаскивания маршрутов
function initSortable() {

    $('.column').sortable({

        connectWith: ".column",
        handle: ".handle",
        items: ".portlet",
        stop: function(e, ui) {
            var selected = ui.item.data('multidrag');
            ui.item.after(selected);
            ui.item.remove();

            initModalOnPortlets();

            $('.column__right .column').each(function() {
                if (($(this).find('.portlet').length) == 0) {
                    $(this).find('.portlet__number_item').text('0');
                } else {
                    var lg = $(this).find('.portlet').length;
                    $(this).find('.portlet').closest('.column').find('.portlet__number_item').text(lg);
                }
            });


            $('.portlet-remove').on("click", function() {
                var lg_del = $(this).closest('.column__right .column').find('.portlet').length;
                if (lg_del == 0) {
                    $(this).closest('.column').find('.portlet__number_item').text('0');
                }
                $(this).closest('.column').find('.portlet__number_item').text(lg_del - 1);
                var start = $(this).closest('.column .portlet').remove();
                $('.start-column').append(start);
                initCheckedPortlets();


            });


            $('#check-2').prop('checked', false);
            initCheckedPortlets();

            var countClick = 0;
            $('.portlet').on('mouseover', function() {
                if (!(window.event.ctrlKey) && !(window.event.shiftKey)) {
                    $('.handle').css('z-index', '2').focus();
                    $('.handle').trigger('mousedown');
                } else {
                    $('.handle').css('z-index', '0');
                    $('.portlet').focus();
                }
            });


        },


        helper: function(e, item) {
            if (!item.hasClass('ui-selected')) {
                $('.column').find('.ui-selected').removeClass('ui-selected');
                item.addClass('ui-selected');
            }

            var selected = $('.ui-selected').clone();
            item.data('multidrag', selected);
            $('.ui-selected').not(item).remove();
            return $('<div class="transporter"></div>').append(selected);
        },
        change: function(e, ui) {
            $('.portlet').removeClass('ui-selected');
        },
        start: function(e, ui) {
            $('.portlet').removeClass('ui-selected');

        }
    }).disableSelection();

}

// Функция подсчета маршрутов
function initCheckedPortlets() {

    var lg = $('.column__left .portlet').length;
    $('.js_all_portlets').text(lg);
    var lg_checked = $('.column__left').find('.portlet.ui-selected').length;
    $('.js_checked_portlets').text(lg_checked);

    $('#check-2').on('change', function() {
        if ($(this).is(':checked')) {
            $('.column__left .portlet').each(function() {
                $(this).addClass('ui-selected');
                var lg_checked = $('.column__left').find('.portlet.ui-selected').length;
                $('.js_checked_portlets').text(lg_checked);
            });
        } else {
            $('.column__left .portlet').each(function() {
                $(this).removeClass('ui-selected');
                $('.js_checked_portlets').text('0');
            });
        }
    });
}

// Функция вызова модального окна в маршруте
function initModalOnPortlets() {
    $('.copy').click(function() {

        $('#editModal').modal('show');
    });
}

// Функция для форм в модальных окнах
function initModalForm() {
    $('#form__unchecked').hide();
    $('#modal-checked').change(function() {
        var bool = $(this).prop('checked');

        if (!bool) {
            $('#form__checked').show();
            $('#form__unchecked').hide();
        } else {
            $('#form__checked').hide();
            $('#form__unchecked').show();
        }
    });
}


// Функция вывода цветовой гаммы
function initColor() {
    $(document).on('click', '.load__small', function() {
        $(this).toggleClass("active");
        $(this).closest('.color-holder').find('.color-box').toggleClass('active');
    });
}




// Функция загрузки изображений
function initImagesUpload() {
    var i = 0;
    $('.inputfile').each(function() {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();
        $input.on('change', function(element) {
            var tmppath = URL.createObjectURL(event.target.files[0]);
            $(this).closest('.add__product').find('.add__view').find('img').fadeIn("fast").attr('src', URL.createObjectURL(event.target.files[0]));

        });

        i++;
        $(this).attr("id", "file-" + i);
        $(this).closest('.js-labelFile').attr("for", "file-" + i);
    });

}




jQuery('<div class="quantity-button quantity-down">-</div>').insertBefore('.quantity input');
jQuery('<div class="quantity-button quantity-up">+</div>').insertAfter('.quantity input');

jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});



// datepicker 


function initDateTimePicker() {
    //plugin DatePicker
    $('.date-picker').datepicker({
        format: "dd.mm.yyyy",
        autoclose: true
    });
    //plugin calendar-icon DatePicker 
    $(".img-calendar").click(function() {
        var id = $(this).attr("for");
        if (!!id)
            $("#" + id).datepicker("show");
    });
}



// show preview upload images

function handleFileSelect(evt) {
    var files = evt.target.files;

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {


                // Render thumbnail.
                var span = document.createElement('li');

                span.innerHTML = [
                    '<div class="img-delete"><img src="assets/png/cancel.png"></div><a data-fancybox="images" data-type="image" data-width="1000" href="', e.target.result, '"><img style="width: 113px;" src="',
                    e.target.result,
                    '" title="', escape(theFile.name),
                    '"/></a>'
                ].join('');

                document.getElementById('list').insertBefore(span, null);

                $('#myModal2').on('shown.bs.modal', function() {
                    handleFileSelect();
                })
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);


    }
}


document.getElementById('file').addEventListener('change', handleFileSelect, true);
$('#myModal2').on('shown.bs.modal', function() {
    document.getElementById('file-2').addEventListener('change', handleFileSelectModal, true);
});

function handleFileSelectModal(evt) {

    var files = evt.target.files;
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {


                // Render thumbnail.
                var span = document.createElement('li');

                span.innerHTML = [
                    '<div class="img-delete"><img src="assets/png/cancel.png"></div><a data-fancybox="images" data-type="image" data-width="1000" href="', e.target.result, '"><img style="width: 113px;" src="',
                    e.target.result,
                    '" title="', escape(theFile.name),
                    '"/></a>'
                ].join('');

                document.getElementById('list-modal').insertBefore(span, null);

                $('#myModal2').on('shown.bs.modal', function() {
                    handleFileSelect();
                })
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);


    }

}







function blockBottomHeight() {
    var headerHeight = $('.header').outerHeight(true);
    var wrapperHeight = $('.wrapper').outerHeight(true);
    var headingHeight = $('.heading-h2').outerHeight(true);
    var weekendTopHeight = $('.nav-tabs').outerHeight(true);
    var weekendDaysHeight = $('.weekend-days').outerHeight(true);
    var weekendDaysTools = $('.weekend-tools').outerHeight(true);
    var editHeight = $('.edit__holder').outerHeight(true);
    var dropHeight = wrapperHeight - headingHeight - headerHeight - editHeight - 60;
    var weekendColumnHeight = dropHeight - weekendTopHeight - weekendDaysTools - weekendDaysHeight;
    $('.weekend-column').css('max-height', weekendColumnHeight);
    $('.weekend-section').outerHeight(weekendColumnHeight);
    /*$('.weekend-section').outerHeight(dropHeight);*/
    $('.drop__area').outerHeight(dropHeight);
    $('.weekend').outerHeight(dropHeight);
    var personalHeight = wrapperHeight - headerHeight;
    $('.js-personal-height').outerHeight(personalHeight);


    $('.weekend-column').slimScroll({
        height: weekendColumnHeight
    });
}



function checkAll() {
    $('#js-check-all').click(function() {
        if ($('#check').is(':checked')) {
            $('.admin__checkbox').find('input[type="checkbox"]').prop('checked', false);

        } else {
            $('.admin__checkbox').find('input[type="checkbox"]').prop('checked', true);

        }
    });
}



function checkedCount() {
    $('.table-overflow input[type="checkbox"]').change(function() {
        var x = $('.table-overflow input[type="checkbox"]:checked').length;
        $('.js-tt-count').text(x);
    });
}

tableSort();

var item_id = '';

function tableSort() {
    $('.sort-item').click(function() {
        $(this).closest('table').find('.sort-item').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('id');


        if (id === item_id) {
            $(this).find('.sort').toggleClass('active');
        }
        item_id = id;


    });
}


function dotted() {
    var wh = $('.weekend-heading').height();
    var wt = $('.weekend-text').height();

    $('.weekend-heading').each(function(index) {
        var vh = $(this).height();

        if (vh <= 21) {

            $(this).closest('.weekend-block').find('.weekend-text').css('max-height', '80px').addClass('full');

        } else {

            $(this).closest('.weekend-block').find('.weekend-text').css('max-height', '60px');

        }
    });

}




function modalBodyHeight() {
    var mH = $('#myModal3 .modal-header').outerHeight(true);
    var mF = $('#myModal3 .save').outerHeight(true);
    var mLg = $('#myModal3 .modal-dialog--lg').outerHeight(true);
    var cH = $('#myModal3 .container-fluid').outerHeight(true);
    var mCt = mLg - mF - mH - cH;
    console.log(mH);
    console.log(mF);
    console.log(mLg);
    console.log(mCt);
    /*$('.modal-dialog--lg .table-overflow').css('max-height', mCt);*/
    $('.table-overflow').css('max-height', mCt);
    $('.table-overflow').slimScroll({
        height: mCt
    });

}



$.contextMenuCommon({
  selector: '#trigger',
  items: {

    folder: {
      label: 'Создать папку',
    },
    download: {
      label: 'Загрузить файл',
    },

    sort: {
      label: 'Сортировать по',
      items: {
        size1: {
          label: 'Наименованию',
          type: 'radio'
        },
        size2: {
          label: 'Дате выгрузки',
          type: 'radio'
        },
        size3: {
          label: 'По типу',
          type: 'radio'
        }
      }
    }

  }
});

var x = $('body').find('.context-menu-list').find('.context-menu-item').find('span').text();
console.log(x);
if(x == "Создать папку") {
    $(x).closest('.context-menu-list').addClass('asdasdasd');
    console.log(x);
}




$.contextMenuCommon({
  selector: '.js-folder-img img',
  items: {

    rename: {
      label: 'Переименовать',
    },
    edit: {
      label: 'Редактировать',
    },
    delete: {
      label: 'Удалить',
    }
  }
});


$.contextMenuCommon({
  selector: '.js-file-menu',
  items: {
    view: {
      label: 'Просмотр',
    },
    download: {
      label: 'Скачать',
    },
    rename: {
      label: 'Переименовать',
    },
    edit: {
      label: 'Редактировать',
    },
    delete: {
      label: 'Удалить',
    }
  }
});



