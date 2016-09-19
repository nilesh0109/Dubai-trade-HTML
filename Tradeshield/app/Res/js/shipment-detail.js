    $('document').ready(function(){
      
        $('.date-picker .input-group-addon').on('click',function(){
        $(this).closest('.date-picker').find('input').datepicker('show');
        });

       $('.date-picker > input').each(function(){
            $(this).datepicker({rtl:false});
            var currentTime = new Date();
            $(this).datepicker('setDate', new Date(currentTime.getFullYear(), currentTime.getMonth()+1, currentTime.getDate()));
      });

      $('form .next-button').on('click',function(e){
         e.preventDefault(); 
        $(this).closest('form').submit();
      });

     $('[data-toggle="tooltip"]').tooltip();
    
     /* ------------------------------- table data manipulation ----------------------------- */
         $('.Commodity-table .delete-row').on('click',function(){
            $(this).closest('.table-row').remove();
         });
     
        $('.Commodity-table .edit-row').on('click',function(){
           $(this).closest('.table-row').find('> .table-cell > span:not(".action-span")').each(function(){
            var $input = $(this).siblings('.input-wrapper').length>0 ? $(this).siblings('.input-wrapper') : $('<div class="input-wrapper"><input type="text" class="edit-field"></div>');
            var $span = $(this);
            $input.find('input').val($span.text());
            $span.hide().after($input);
           });
        });
    });


