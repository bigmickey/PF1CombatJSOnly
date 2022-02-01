function combatantSelection1(){
  var combatant1List = document.getElementById("combatant1SelectionList");
  document.getElementById("combatant1Selected").value = combatant1List.options[combatant1List.selectedIndex].text;
}

function combatantSelection2(){
  var combatant2List = document.getElementById("combatant2SelectionList");
  document.getElementById("combatant2Selected").value = combatant2List.options[combatant2List.selectedIndex].text;
}

const startCombatBtn = document.getElementById("start_combat_btn");

startCombatBtn.addEventListener("click", startCombat);

function startCombat() {
  var combatant1 = new Object();
  var combatant2 = new Object();
  var combatResultsDiv = document.getElementById('combat_results');
  combatResultsDiv.innerHTML += "<p>Starting combat ...</p>";
  combatResultsDiv.innerHTML += "<p>Generating combatant stats</p>";
  
  /* generate stats */
  /* Goblin */
  /* hps = 1d10+1 */
  /* AC 16 */
  /* Melee short sword +1 1d4/19-20 */
  combatant1.hps = Math.ceil(Math.random() * 10) + 1;
  combatResultsDiv.innerHTML += "<p>Goblin hit points = " + combatant1.hps + "</p>";

  /* Orc */
  /* hps = 1d10+1 */
  /* AC 13 */
  /* Melee falchion +4 2d4+4/18-20 */
  combatant2.hps = Math.ceil(Math.random() * 10) + 1;
  combatResultsDiv.innerHTML += "<p>Orc hit points = " + combatant2.hps + "</p>";
}
