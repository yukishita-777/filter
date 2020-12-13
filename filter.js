'use strict';

{ 
  function searchWord () {
    var searchText = $(this).val();
    var targetText;
    
    if(searchText !== '') {
      $('#list li').each(function() {
        targetText = $(this).text();
        
        // 文字列に含まれているかindexOfを利用
        if(targetText.indexOf(searchText) !== -1) {
          $(this).removeClass('hidden');　
        } else {
          $(this).addClass('hidden');　//含まれていない場合、display: none適用
        }
      });
    };
  };
  // searchWordの実行
  $('#search-text').on('input', searchWord);
  
  // $('#keyword').quicksearch('#list li');
}