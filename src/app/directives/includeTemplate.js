'use strict';

function includeTemplate($http, $compile, $templateCache){
   
    return function(scope, element, attrs){
       
        element.bind("click", function(attrs){
           angular.element(document.getElementById("space-for-buttons"))
                .append(
                    $compile(
                        '<table>'+
                                '<tr ng-repeat="item in savingsMain">'+
                                '<td>'+
                                    '<table class="mytable" cellpadding="0" cellspacing="0">'+
                                    '<tr>'+
                                        '<th colspan="2">{{item.account_type}}</th>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td rowspan="2">{{item.amount}}</td>'+
                                        '<td>{{item.date}}</td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<td>{{item.maturity}}</td>'+
                                    '</tr>'+
                                    '</table>'+
                                '</td>'+
                                '</tr>'+
                                
                            '</table>'
                       
                        )(scope)); 
            });
        
    
        
      }
}