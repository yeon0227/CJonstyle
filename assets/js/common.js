function dayCount(endDate, frame) {

  const today = new Date();
  const dday = new Date(endDate);
  const timeGap = dday.getTime() - today.getTime();

  const seconds = String(Math.floor(timeGap / 1000) % 60).padStart(2,'0'); 
  const minutes = String(Math.floor(timeGap / (1000 * 60)) % 60).padStart(2,'0'); 
  const hours = String(Math.floor(timeGap / (1000 * 60 * 60)) % 24).padStart(2,'0'); 

  $(frame).text(`${hours}:${minutes}:${seconds}`) 
  
}

dayCount('2025,12,31','#date1')
setInterval(() => {
  dayCount('2025,12,31','#date1');
  dayCount('2025,12,31','#date2'); 
  dayCount('2025,12,31','#date3'); 
}, 1000);


var toggleMainPopup = function() {
  
  var handleCookie = {
    setCookie: function (name, val, exp) {
      var date = new Date();
      
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      console.log(name + "=" + val + ";expires=" + date.toUTCString() + ";path=/");
      
      document.cookie = name + "=" + val + ";expires=" + date.toUTCString() + ";";
    },
    getCookie: function (name) {
      var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
      return value ? value[2] : null;
    }
  };
  console.log(handleCookie.getCookie("today"));
  
  // 쿠키 읽고 화면 보이게
  if (handleCookie.getCookie("today") == "y") {
    $(".main-popup").removeClass("on");
  } else {
    $(".main-popup").addClass("on");
  }

  // 오늘하루 보지 않기 버튼
  $(".main-popup").on("click", ".week-close-btn", function () {
    handleCookie.setCookie("today", "y", 1);
    $(this).parents(".main-popup.on").removeClass("on");
  });

  // 일반 버튼
  $(".main-popup").on("click", ".close-btn", function () {
    $(this).parents(".main-popup.on").removeClass("on");
  });
}

$(function() {
  toggleMainPopup();
});