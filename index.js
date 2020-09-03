$("#js-shopping-list-form").on('submit', function(evt) {
var text = $('#shopping-list-entry').val();
$('.shopping-list').append(`<li>
<span class="shopping-item">${text}</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div>
</li>`)

evt.preventDefault();
$('#shopping-list-entry').val("")
});

$(".shopping-item-delete").on('click', function() {
    console.log("deleted")
    $(this).parent().parent().remove()
});

$(".shopping-item-toggle").on('click', function() {
    console.log("checked")
    $(this).parent().parent().toggleClass("shopping-item__checked")

});
