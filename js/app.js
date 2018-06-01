flatpickr.defaultConfig.animate = window.navigator.userAgent.indexOf('MSIE') === -1;
flatpickr(".flatpickr");

var examples = document.querySelectorAll(".flatpickr");

var configs = {
    timePickerMinMaxHours: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        minDate: "6:30",
        maxDate: "20:30",
        defaultDate: "9:00",
        time_24hr: true,
        minuteIncrement: 1,
        onChange: function(){showLeaveTime(getTimeToAdd())}
    },
}

for (var i = 0; i < examples.length; i++) {
    flatpickr(examples[i], configs[examples[i].getAttribute("data-id")] || {});
}

$(document).ready(function() {
    $('input:radio[name=leaveOptions]').change(function() {
        showLeaveTime(getTimeToAdd());
    });
});

var arr_time = document.getElementById('arrivedInput');
showLeaveTime(getTimeToAdd());

function getTimeToAdd() {
    if (document.getElementById('leaveOptionPlus').checked) {
        return 20;
    }
    else {
        return 0;
    }
}

function showLeaveTime(minutesToAdd) {
    var time = document.getElementById('leaveTime');
    // Adds 7.6h worktime + 45 breaktime + custom value to arrived time
    time.innerHTML = moment.utc(arr_time.value, 'hh:mm').add({hours: 7.6, minutes: 45 + minutesToAdd}).format('HH:mm');
    
}
