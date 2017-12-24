//Carouserl Script Starts
$('.carousel').carousel();

//Accordion Script Begins
    $(document).ready(function(){
        // Add icon for collapse element which is open by default
        $(".collapse.in").each(function(){
            $(this).siblings(".panel-heading").find(".glyphicon-triangle-bottom").addClass("glyphicon-triangle-top").removeClass("glyphicon-triangle-bottom");
        });
        
        // Toggle icons on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
            $(this).parent().find(".glyphicon-triangle-bottom").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
        }).on('hide.bs.collapse', function(){
            $(this).parent().find(".glyphicon-triangle-top").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
        });
        
    });
//Accordion Script Ends

//Interval Script Begins
$( "#slider_2pos" ).slider({
    range: true,
    values: [ 25, 67 ]
});
$( "#slider_1pos" ).slider({
    range: "max",
      value: 37,
      min: 1,
      max: 700   
});

//Switchers Events Start
$(document).ready(function(){
        $(":checkbox").each(function(){
            if ($(this).is(':checked')) {
                $(this).parent().find(".check_span").html("Switch ON");
            } else {
                $(this).parent().find(".check_span").html("Switch OFF");
            }
        });
        $(':checkbox').change(function () {
            if ($(this).is(':checked')) {
                $(this).parent().find(".check_span").html("Switch ON");
            } else {
                $(this).parent().find(".check_span").html("Switch OFF");
            }
        });
//Weather Events Start
        var isCelcius = true;
        $(".temp_scale").click(function () {
            var me = $(this);
            if (me.hasClass("deactivated")) {
                $(this).removeClass("deactivated");
                $(this).parent().find(".activated").removeClass("activated").addClass("deactivated");
            };
            $(this).addClass("activated");
            var currentDegree = parseFloat($("#temp_value").text());
            if (isCelcius) {
                var c2f = (currentDegree*1.8+32).toFixed();
                isCelcius = false;
                $("#temp_value").html(c2f+"&deg;");
            } else {
                var f2c = ((currentDegree-32)/1.8).toFixed();
                isCelcius = true;
                $("#temp_value").html(f2c+"&deg;");
            };
        });
        var TodayDate = new Date();
        var dayNames = $( "#datepicker" ).datepicker( "option", "dayNames" );
        var TodayDate = new Date();
        $(document).ready(function(){
            for (var i = 1; i <= 4; i++) {
                var DateForChange = new Date(TodayDate.setDate(TodayDate.getDate() + i));
                var DaySelector = "#day_pl_"+i;
                $(DaySelector).html(dayNames[DateForChange.getDay()]);
                DateForChange = new Date(TodayDate.setDate(TodayDate.getDate() - i));
            };
        });
});    
//Weather Events End

//Calendar Scripts Start
$( "#datepicker" ).datepicker({
    inline: true,
    autoSize: true,
    firstDay: 1,
    dayNamesMin: [ "S", "M", "T", "W", "T", "F", "S" ]

});
//Calendar Scripts End

//Dropdown Script Starts
    var click_counter = 0;
    $(".btn-group.dd").click(function() {
      click_counter++;
    if (click_counter%2) {
        $(this).addClass("active");
        $(this).children().children(".dd_name").html("Dropdown Active");
        $(this).children().children(".dd_span").children().children().children().
        removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
    } else {
        $(this).removeClass("active");
        $(this).children().children(".dd_name").html("Dropdown Normal");
        $(this).children().children(".dd_span").children().children().children().
        removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
        };
    });
//Dropdown Script Ends