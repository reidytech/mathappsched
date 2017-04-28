angular.module('mathApp.controllers', [])

.controller('AgendaCtrl', function($scope) {
   $scope.navTitle='<img class="title-image" style="height: 27px;margin-top: 8px;" src="img/agenda.png" />';

})

.controller('CalendarCtrl', function($scope, $templateCache) {
             'use strict';
        $scope.calendar = {};
        
        $scope.changeMode = function (mode) {
            $scope.calendar.mode = mode;
        };

        $scope.loadEvents = function () {
            $scope.calendar.eventSource = createEvents();
        };

        $scope.onEventSelected = function (event) {
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
        };

        $scope.onViewTitleChanged = function (title) {
            $scope.viewTitle = title;
            $scope.loadEvents();
        };

        $scope.today = function () {
            $scope.calendar.currentDate = new Date();
        };

        $scope.isToday = function () {
            var today = new Date(),
                currentCalendarDate = new Date($scope.calendar.currentDate);

            today.setHours(0, 0, 0, 0);
            currentCalendarDate.setHours(0, 0, 0, 0);
            return today.getTime() === currentCalendarDate.getTime();
        };

        $scope.onTimeSelected = function (selectedTime, events, disabled) {
            console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
        };

        function createEvents(){
          var dayStart = [];
          var dayEnd = [];
          var events = [];

            dayStart[0] = new Date();
            dayEnd[0] = new Date();
            dayStart[1] = new Date();
            dayEnd[1] = new Date();
            dayStart[5] = new Date();
            dayEnd[5] = new Date();
            dayStart[2] = new Date();
            dayEnd[2] = new Date();
            dayStart[3] = new Date();
            dayEnd[3] = new Date();
            dayStart[4] = new Date();
            dayEnd[4] = new Date();
            dayStart[6] = new Date();
            dayEnd[6] = new Date();
            dayStart[7] = new Date();
            dayEnd[7] = new Date();


            dayStart[0].getFullYear(); dayStart[0].getMonth(); dayStart[0].setDate(24); dayStart[0].setHours(10); dayStart[0].setMinutes(5);
            dayEnd[0].getFullYear(); dayEnd[0].getMonth(); dayEnd[0].setDate(24); dayEnd[0].setHours(11); dayEnd[0].setMinutes(0);
            dayStart[1].getFullYear(); dayStart[1].getMonth(); dayStart[1].setDate(25); dayStart[1].setHours(9); dayStart[1].setMinutes(1);
            dayEnd[1].getFullYear(); dayEnd[1].getMonth(); dayEnd[1].setDate(25); dayEnd[1].setHours(10); dayEnd[1].setMinutes(1);
            dayStart[2].getFullYear(); dayStart[2].getMonth(); dayStart[2].setDate(26); dayStart[2].setHours(12); dayStart[2].setMinutes(30);
            dayEnd[2].getFullYear(); dayEnd[2].getMonth(); dayEnd[2].setDate(26); dayEnd[2].setHours(1); dayEnd[2].setMinutes(30);
            dayStart[3].getFullYear(); dayStart[3].getMonth(); dayStart[3].setDate(27); dayStart[3].setHours(9); dayStart[3].setMinutes(0);
            dayEnd[3].getFullYear(); dayEnd[3].getMonth(); dayEnd[3].setDate(27); dayEnd[3].setHours(10); dayEnd[3].setMinutes(1);
            dayStart[4].getFullYear(); dayStart[4].getMonth(); dayStart[4].setDate(28); dayStart[4].setHours(9); dayStart[4].setMinutes(0);
            dayEnd[4].getFullYear(); dayEnd[4].getMonth(); dayEnd[4].setDate(28); dayEnd[4].setHours(10); dayEnd[4].setMinutes(0);
            dayStart[5].getUTCFullYear(); dayStart[5].getMonth(); dayStart[5].setDate(25); dayStart[5].setHours(12); dayStart[5].setMinutes(30);
            dayEnd[5].getUTCFullYear(); dayEnd[5].getMonth(); dayEnd[5].setDate(25); dayEnd[5].setHours(1); dayEnd[5].setMinutes(30);
            
            dayStart[6].getUTCFullYear(); dayStart[6].getMonth(); dayStart[6].setDate(27); dayStart[6].setHours(12); dayStart[6].setMinutes(30);
            dayEnd[6].getUTCFullYear(); dayEnd[6].getMonth(); dayEnd[6].setDate(27); dayEnd[6].setHours(1); dayEnd[6].setMinutes(30);

            dayStart[7].getUTCFullYear(); dayStart[7].getMonth(); dayStart[7].setDate(28); dayStart[7].setHours(12); dayStart[7].setMinutes(30);
            dayEnd[7].getUTCFullYear(); dayEnd[7].getMonth(); dayEnd[7].setDate(28); dayEnd[7].setHours(1); dayEnd[7].setMinutes(30);




            events.push({
                title: 'Period 3: Review of Inverse Functions',
                startTime: dayStart[0],
                endTime: dayEnd[0],
                allDay: false,
             });
                events.push({
                title: 'Period 3: Domain, Range, and Non-Functions: Inverse Functions',
                startTime: dayStart[1],
                endTime: dayEnd[1],
                allDay: false,
             });

                events.push({
                title: 'Period 6: Domain, Range, and Non-Functions: Inverse Functions',
                startTime: dayStart[2],
                endTime: dayEnd[2],
                allDay: false,
             });
                events.push({
                title: 'Period 3: End of Inverse Functions, Scan',
                startTime: dayStart[3],
                endTime: dayEnd[3],
                allDay: false,
             });
              events.push({
                title: 'Period 3: Introduction to Rational Functions',
                startTime: dayStart[4],
                endTime: dayEnd[4],
                allDay: false,
             });
                                events.push({
                title: 'Period 6: Review of Inverse Functions',
                startTime: dayStart[5],
                endTime: dayEnd[5],
                allDay: false,
             });

              events.push({
                title: 'Period 6: End of Inverse Functions, Scan',
                startTime: dayStart[6],
                endTime: dayEnd[6],
                allDay: false,
             });

                           events.push({
                title: 'Period 6: Introduction to Rational Functions',
                startTime: dayStart[7],
                endTime: dayEnd[7],
                allDay: false,
             });

        return events;
    }
        
})

//.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
 // $scope.chat = Chats.get($stateParams.chatId);
//})

.controller('CalculatorCtrl', function($scope, $window, $timeout) {
    $scope.calculateDimensions = function(gesture) {
    $scope.dev_width = $window.innerWidth;
    $scope.dev_height = $window.innerHeight;
  }
  angular.element($window).bind('resize', function(){
    $scope.$apply(function() {
      $scope.calculateDimensions();  
    })       
  });
    
  $scope.calculateDimensions();  
  $scope.getCal = $timeout(function(){ var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);
    calculator.setExpression({id:'graph1', latex:'y=x^2'});
   }, 5000);

  

});
