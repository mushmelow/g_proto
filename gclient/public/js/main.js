$(()=>{
  console.log('loaded')
  getApplianceInfos()
  
  //fixed top nav-bar when scrolled down
  $(function(){
    var hasBeenTrigged = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 85 && !hasBeenTrigged) {
            $(".navbar").addClass('fixed-top');
            hasBeenTrigged = true;
        }
        if ($(this).scrollTop() < 85 && hasBeenTrigged){
            $(".navbar").removeClass('fixed-top');
            hasBeenTrigged = false;
        }
    });
  });
})

function getApplianceInfos(){
  $.get('http://localhost:3001/applianceInfos', (data) => {
    // console.log(data["0"].name)
    var html = `
      <li><b>Name: </b>${data["0"].name}</li>
      <li><b>Product Version: </b>${data["0"].productVersion}</li>
      <li><b>Serial Number: </b>${data["0"].serialNumber}</li>
      <li><b>System Time:</b></li>
      <li><b>Uptime:</b></li>
    `;
    $('#applianceInfos').append(html);
  })
}
