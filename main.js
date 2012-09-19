document.addEventListener("DOMContentLoaded", function () {
  var total = d3.selectAll('section')[0].length - 1;
  d3.selectAll('section')
    .insert('p')
    .attr('class','index')
    .text(function(d,i){
      if (i != 0) {
        return i + '/' + total
      };
    })
}, false);
