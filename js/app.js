" use strict";
var app = angular.module('premier-league-app',['ngRoute','timer','ngDialog']);
 app.config(['$routeProvider',
    function($routeProvider) 
    {
      // $locationProvider.html5Mode(true);
      $routeProvider.
        when('/', {
          templateUrl: 'templates/home.html',
          controller: 'mainController'
      }).
        when('/home', {
          templateUrl: 'templates/home.html',
          controller: 'mainController'
      }).
        when('/chooseteam', {
          templateUrl: 'templates/chooseteam.html',
          controller: 'mainController'
        }).
         when('/choose11', {
          templateUrl: 'templates/choose11.html',
          controller: 'mainController'
        }).
        otherwise({
          redirectTo: '/'
        });

      
        
  }]);
 app.service('dataFactory', function() {
  console.log('boo2');

        /*   F- Forward
             GK - Goal Keeper
              M- Mid Fielder
              D- Defender
        */

          this.getplayerdata = function() {
                                    var playerdata= [];
                                    playerdata[0] = {'id':1,'name':'Rooney','role':"F","price":29000,'img':'css/img/player2.png'}; 
                                    playerdata[1] = {'id':2,'name':'Ronaldo','role':"F","price":45000,'img':'css/img/player1.png'}; 
                                    playerdata[2] = {'id':3,'name':'Messi','role':"F","price":45000,'img':'css/img/player3.png'}; 
                                    playerdata[3] = {'id':4,'name':'Alaba','role':"D","price":40000,'img':'css/img/player4.png'}; 
                                    playerdata[4] = {'id':5,'name':'Kross','role':"M","price":15000,'img':'css/img/player5.png'}; 
                                    playerdata[5] = {'id':6,'name':'Ramos','role':"D","price":10000,'img':'css/img/player6.png'}; 
                                    playerdata[6] = {'id':7,'name':'Neur','role':"GK","price":22000,'img':'css/img/player7.png'}; 
                                    playerdata[7] = {'id':8,'name':'De Gea','role':"GK","price":40000,'img':'css/img/player8.png'}; 
                                    playerdata[8] = {'id':9,'name':'Company','role':"D","price":24000,'img':'css/img/player9.png'}; 
                                    playerdata[9] = {'id':10,'name':'Pique','role':"D","price":20000,'img':'css/img/player10.png'}; 
                                    playerdata[10] = {'id':11,'name':'Hummels','role':"M","price":28000,'img':'css/img/player1.png'};  
                                    playerdata[11] = {'id':12,'name':'Busquets','role':"M","price":30000,'img':'css/img/player2.png'}; 
                                    playerdata[12] = {'id':13,'name':'Fabregas','role':"M","price":20500,'img':'css/img/player3.png'}; 
                                    playerdata[13] = {'id':14,'name':'Iniesta','role':"M","price":22000,'img':'css/img/player4.png'}; 
                                    playerdata[14] = {'id':15,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player5.png'}; 
                                    playerdata[15] = {'id':16,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player6.png'}; 
                                    playerdata[16] = {'id':17,'name':'Gaurav','role':"GK","price":12000,'img':'css/img/player7.png'}; 
                                    playerdata[17] = {'id':18,'name':'Gaurav','role':"GK","price":40000,'img':'css/img/player8.png'}; 
                                    playerdata[18] = {'id':19,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player9.png'}; 
                                    playerdata[19] = {'id':20,'name':'Gaurav','role':"GK","price":15000,'img':'css/img/player10.png'}; 
                                    playerdata[20] = {'id':21,'name':'Gaurav','role':"GK","price":40000,'img':'css/img/player1.png'}; 
                                    playerdata[21] = {'id':22,'name':'Gaurav','role':"GK","price":19000,'img':'css/img/player2.png'};
                                    playerdata[22] = {'id':23,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player3.png'}; 
                                    playerdata[23] = {'id':24,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player4.png'}; 
                                    playerdata[24] = {'id':25,'name':'Gaurav','role':"GK","price":10000,'img':'css/img/player5.png'}; 
                                    playerdata[25] = {'id':26,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player6.png'}; 
                                    playerdata[26] = {'id':27,'name':'Gaurav','role':"GK","price":10000,'img':'css/img/player7.png'}; 
                                    playerdata[27] = {'id':28,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player8.png'}; 
                                    playerdata[28] = {'id':29,'name':'Gaurav','role':"GK","price":20000,'img':'css/img/player9.png'}; 
                                    playerdata[29] = {'id':30,'name':'Gaurav','role':"GK","price":10000,'img':'css/img/player10.png'}; 

            return playerdata;
          }
  
  });

 app.controller("mainController", function($scope,dataFactory,ngDialog)
 {

      console.log('boo');
      $scope.playerslist = dataFactory.getplayerdata();
          console.log('yes');
           $scope.count= 0;
           $scope.selectedsquad = [];
           $scope.totalamount= 300000;
           $scope.selectedamount = 0;
           $scope.defenders = 0;
           $scope.forwards = 0;
           $scope.midfielders = 0;
           $scope.goalkeepers = 0;
           $scope.team_name= '';
           
          $scope.addPlayer = function(playerid,playername,playerrole,playerprice,playerimg){
          if(($scope.totalamount - $scope.selectedamount  ) >= parseInt(10000))
          {   
            
              if( $scope.selectedsquad.indexOf(playerid) == -1)
                   {         
                    console.log($scope.selectedsquad.indexOf(playerid));
                      if($scope.count < 14)
                      {
                        if(playerrole == 'D')
                        {
                            $scope.defenders++;
                        }
                        else if (playerrole == 'F') 
                          {
                            $scope.forwards++;
                          }

                          else if(playerrole == 'M')
                          {
                            $scope.midfielders++; 
                          }
                          else if(playerrole == 'GK')
                          {
                            $scope.goalkeepers++;
                          }

                        var table= document.getElementById('selected-list');
                        table.setAttribute('class','table');
                        var tr = document.createElement("tr");
                        tr.setAttribute("id", "element"+playerid);
                        var img = document.createElement("img");
                        img.setAttribute('class','selected-player-image');
                        img.setAttribute('src',playerimg);
                        var td = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        td.setAttribute('class','selectedname');
                        td2.setAttribute('class','selectedrole');
                        td3.setAttribute('class','selectedprice');

                        td.appendChild(img);
                        td.appendChild(document.createTextNode(playername));
                        td2.appendChild(document.createTextNode(playerrole));
                        td3.appendChild(document.createTextNode(playerprice));
                        tr.appendChild(td);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        table.appendChild(tr);

                        var addsign = document.getElementById('plussign'+playerid);
                        addsign.setAttribute('src','css/img/right.png');
                        $scope.count++;
                        $scope.selectedsquad.push(playerid);
                        $scope.selectedamount += playerprice;
                    
                      }
                        else
                      {

                        if(playerrole == 'D')
                          {
                              $scope.defenders++;
                          }
                        else if (playerrole == 'F') 
                          {
                            $scope.forwards++;
                          }

                          else if(playerrole == 'M')
                          {
                            $scope.midfielders++; 
                          }
                          else if(playerrole == 'GK')
                          {
                            $scope.goalkeepers++;
                          }

                        var table= document.getElementById('selected-list');
                        table.setAttribute('class','table');
                        var tr = document.createElement("tr");
                        tr.setAttribute("id", "element"+playerid);
                        var img = document.createElement("img");
                        img.setAttribute('class','selected-player-image');
                        img.setAttribute('src',playerimg);
                        var td = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        td.setAttribute('class','selectedname');
                        td2.setAttribute('class','selectedrole');
                        td3.setAttribute('class','selectedprice');

                        td.appendChild(img);
                        td.appendChild(document.createTextNode(playername));
                        td2.appendChild(document.createTextNode(playerrole));
                        td3.appendChild(document.createTextNode(playerprice));
                        tr.appendChild(td);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        table.appendChild(tr);

                        var addsign = document.getElementById('plussign'+playerid);
                        addsign.setAttribute('src','css/img/right.png');
                        $scope.count++;
                        $scope.selectedsquad.push(playerid);
                        $scope.selectedamount += playerprice;                        

                                      ngDialog.open({ template: 'templates/popup.html', 
                                        width:'30%'
                                    });
                                  
            
                          
                      }
                  }
                  else
                  {
                    ngDialog.open({ template: 'templates/already_added_popup.html', 
                                        width:'30%'
                                    });
                                  
                  }
            }
            else
            {
                    console.log('yeah');
                    ngDialog.open({ template: 'templates/no_money.html', 
                                        width:'30%'
                                    });
            }
        };

          $scope.removePlayer = function(playerid,playername,playerrole,playerprice) 
          { 
                  
                  var row = document.getElementById("element"+playerid);
                  row.parentNode.removeChild(row);
                  $scope.count--;
                  $scope.selectedamount -= playerprice;
                  $scope.team_name='';

                  if(playerrole == 'D')
                        {
                            $scope.defenders--;
                        }
                        else if (playerrole == 'F') 
                          {
                            $scope.forwards--;
                          }

                          else if(playerrole == 'M')
                          {
                            $scope.midfielders--; 
                          }
                          else if(playerrole == 'GK')
                          {
                            $scope.goalkeepers--;
                          }
                  var indx = $scope.selectedsquad.indexOf(playerid);
                  if(indx != -1)
                  {
                    $scope.selectedsquad[indx] = '';
                  }

                  var addsign = document.getElementById('plussign'+playerid);
                  addsign.setAttribute('src','css/img/add.png');


          };


                $scope.save_team_name = function(team_name)
                {
                  $scope.team_name = team_name;
                  localStorage.setItem("team_name", $scope.team_name);
                  var team_name_submit = document.getElementById('team_name_submit');
                  team_name_submit.style.display = 'none';
                  team_name_submit_btn.style.display = 'none';

                  var tm_name = document.getElementById('tm_name');
                  var team_name_span = document.createElement("span");
                  tm_name.appendChild(document.createTextNode("Team Name :"+" " +$scope.team_name));

                    
                };

          if(typeof(Storage) !== "undefined") 
          {
                
                localStorage.setItem("squad", JSON.stringify($scope.selectedsquad));
                var x = localStorage.getItem("squad");
                $scope.y = localStorage.getItem("team_name");
                console.log(x[0].name);
          } 
          else 
          {
                 alert("Sorry, your browser does not support Web Storage...");
          }
          console.log($scope.y);

  });

        app.directive('countdown', [
                          'Util',
                          '$interval',
                          function (Util, $interval) {
                              return {
                                  restrict: 'A',
                                  scope: { date: '@' },
                                  link: function (scope, element) {
                                      var future;
                                      future = new Date(scope.date);
                                      $interval(function () {
                                          var diff;
                                          diff = Math.floor((future.getTime() - new Date().getTime()) / 1000);
                                          return element.text(Util.dhms(diff));
                                      }, 1000);
                                  }
                              };
                          }
              ]);

            app.factory('Util', [function () {
            return {
                dhms: function (t) {
                    var days, hours, minutes, seconds;
                    days = Math.floor(t / 86400);
                    t -= days * 86400;
                    hours = Math.floor(t / 3600) % 24;
                    t -= hours * 3600;
                    minutes = Math.floor(t / 60) % 60;
                    t -= minutes * 60;
                    seconds = t % 60;
                    return [
                        days + 'd',
                        hours + 'h',
                        minutes + 'm',
                        seconds + 's'
                    ].join(' ');
                }
            };
        }]);



