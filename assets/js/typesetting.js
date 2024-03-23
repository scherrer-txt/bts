(function($){
    $.fn.czTypesetting = function(){
        this.each(function(index, value){
         var str = $(this).html();
         str = str.replace(/(\s|^)(a|i|k|o|ó|s|u|v|z)(\s+)([^\p{Cc}\p{Cf}\p{zL}\p{Zp}]+)/gmi , '$1$2&nbsp;$4');
         $(this).html(str); 
       });
 
       return this;
    };
}( jQuery ));

$( document ).ready(function() {
    $('p').czTypesetting();
});
