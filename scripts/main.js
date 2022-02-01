function combatantSelection1(){
  var combatant1List = document.getElementById("combatant1SelectionList");
  document.getElementById("combatant1Selected").value = combatant1List.options[combatant1List.selectedIndex].text;
}

function combatantSelection2(){
  var combatant2List = document.getElementById("combatant2SelectionList");
  document.getElementById("combatant2Selected").value = combatant2List.options[combatant2List.selectedIndex].text;
}
