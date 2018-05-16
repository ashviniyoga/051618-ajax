
// only display turtles, search doesn't work

$.getJSON('data.json', function(data){
    console.log(data);
    var output = '<ul>';
    $.each(data, function(key, val){
        
        output += '<li>';
        output += '<h2>' + val.name + '</h2>';
        output += '<img src="images/' + val.shortname + '.jpg" alt="' + val.name + '" />';
        output += '<p>' + val.bio + '</p>';
        output += '<p><em>' + val.fact + '</em></p>';
        output += '</li>';
       
    }); // end each
    output += '</ul>';
    $('#update').html(output);
});
