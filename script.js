﻿var delo=["Сидят ","Лежат ","Пердят ","Дрочат ","Кайфуют ","Блюют "];
var nums=["два ","три ","четыре ","сто два ","двадцать два ","двести двадцать восемь ","пятеро ","шестеро "];
var names=["гея ","кавказца ","русских ","уебана ","американца ","Егора ","карлика ","Олега ","Яна ","кыргыза ","гука ","админа ","Вадима "];
var gde=["в бассейне ","в самолете ","в поезде ","дома ","на лайнере ","в окопе ","в беседе ","в группе ","в трамвае ","в автобусе ",];
var chto=[", пердят в ",", трахают ",", программируют роботов-",", сосут у ",", ненавидят ",", убивают "];
var kogo=["шлюх ","одноклассниц ","уборщиков ","учителей ","аутистов ","гуков ","девок "];
var prikol=["под наркотой.",",а они еще и сопротивляются.",",а им не нравится.",".",",при этом бьют их.",".",",а потом пошли бухать.",",а потом записали трек."];



function getrj(){
	var one = Math.floor(Math.random() * delo.length);
	var two = Math.floor(Math.random() * nums.length);
	var three = Math.floor(Math.random() * names.length);
	var four = Math.floor(Math.random() * gde.length);
	var five = Math.floor(Math.random() * chto.length);
	var six = Math.floor(Math.random() * kogo.length);
	var seven = Math.floor(Math.random() * prikol.length);
	var jj = document.getElementById("rj").innerHTML=delo[one]+nums[two]+names[three]+gde[four]+chto[five]+kogo[six]+prikol[seven];
}

function console(){
	var cons=prompt("Введи запрос");
	if(cons=="help"){
		alert("help-помощь");
	}else{
		alert("команда не найдена\nhelp чтобы узнать доступные команды ");
	}
}
