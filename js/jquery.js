$(document).ready(function(){


    var particles = {
        dotColor: '#1ec5ee',
        lineColor: '#0a4e90',
        density: 20000,
        parallax: false
    };
    var particleDensity;
    var options = {
            effectWeight: 1,
            outerBuffer: 1.05,
            elementDepth: 200,
            perspectiveMulti: 1.5,
            enableSmoothing: true,
            onInit: function() {
              $('#particle-target').particleground(particles);
            }
        };

    $('#min-max-tag').click(function(){
      if ($('#demo-menu').hasClass('closed')) {
        $('#demo-menu').removeClass('closed').addClass('open');
      } else {
        $('#demo-menu').removeClass('open').addClass('closed');
      }
    });

    $(document).ready(function() {

      $('#demo1').logosDistort(options);

    });
    

});

