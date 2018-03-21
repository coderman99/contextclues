document.addEventListener("DOMContentLoaded", function () {




    var friend = ["Dizzle", "Quipples", "Tazmania", "Triples", "Skrillet"];
    var location = ["Boise", "Seattle", "New Orleans", "Boston", "Stacked Pancakes", "Waffles", "Puyallup", "Tacoma", "Portland", "San Frisco"];
    var weapon = ["Nerf Gun", "Water Gun", "Hibachi Knife", "Napkin", "Door Knob", "Wooden Block", "Paper", "Mattress", "Liquor", "Medicine", "Syringe", "Podcast", "Thirteen", "Staples", "Nail Gun", "Fish Eye", "Vaporizer", "Hammer", "Screwdriver", "Plyers"];
    var i = 1;

    for (i; i < 101; i++) {
        var h3 = document.createElement("h3");
        var multiH3 = document.createTextNode("Accusation " + i + ":");
        h3.appendChild(multiH3);
        document.body.appendChild(h3);
        var fname = (i % friend.length);
        var locname = (i % location.length);
        var weapname = (i % weapon.length);
        
        
    h3.addEventListener("click", function(fname, locname, weapname){
        alert("Accusation " + this + ":" + "I accuse " + friend[fname] + ", with the " + weapon[weapname] + " in the " + location[locname] + "!");
    }.bind(i, fname, locname, weapname));
}
});