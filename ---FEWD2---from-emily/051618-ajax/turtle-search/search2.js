$('#search').keyup(function(){
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");



$.getJSON('data.json', function(data){
    console.log(data);
    var output = '<ul>';
    $.each(data, function(key, val){
        if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)){
        output += '<li>';
        output += '<h2>' + val.name + '</h2>';
        output += '<img src="images/' + val.shortname + '.jpg" alt="' + val.name + '" />';
        output += '<p>' + val.bio + '</p>';
        output += '<p><em>' + val.fact + '</em></p>';
        output += '</li>';
       }
    }); // end each
    output += '</ul>';
    $('#update').html(output);
});
}); // end keyup event