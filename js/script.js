// Abdallah Osama Hammad - 442052035

var facts = [
    "Spaghetti and Meatballs Is Not an Italian Dish.",
    "Salad Comes After the Meal in Italy.",
    "Traditional Italian Pizza always has a thin crust.",
    "Pepperoni Pizza is not originated in Italy.",
    "There are more than 600 different pasta shapes.",
    "Pizza was invented in the 18th century.",
    "Buon Appetito is said before the meal in Italy not after.",
    "Pizza is the most popular Italian-style food around the world.",
    "Deep dish pizzas aren't authentically Italian.",
    "Pasta is eaten with a fork, never a spoon in Italy.",
    "The history of pizza can be traced back to the Ancient Greek, Roman and Persian Empires."
];

var br = `<h3>Breakfast Menu</h3> <table> <tr><th>Dish</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>Italian Brunch Torte</td>
        <td>22 SAR</td>
    </tr>
    <tr>
        <td>Italian Cloud Eggs</td>
        <td>16 SAR</td>
    </tr>
    <tr>
        <td>Calico Pepper Frittata</td>
        <td>18 SAR</td>
    </tr>
    <tr>
        <td>Tiramisu Crepes</td>
        <td>16 SAR</td>
    </tr>
    <tr>
        <td>Apricot-Pancetta Strata</td>
        <td>21 SAR</td>
    </tr>
</table>`

var lu = `<h3>Lunch and Dinner Menu</h3>
<table>
    <tr>
        <th>Dish</th>
        <th>Price</th>
    </tr>
    <tr>
        <td>Pepperoni Pizza</td>
        <td>15 - 25 - 35 SAR (Depending on Size)</td>
    </tr>
    <tr>
        <td>Margarita Pizza</td>
        <td>15 - 25 - 35 SAR (Depending on Size)</td>
    </tr>
    <tr>
        <td>Beef Ragu</td>
        <td>24 SAR</td>
    </tr>
    <tr>
        <td>Chicken Piccata</td>
        <td>22 SAR</td>
    </tr>
    <tr>
        <td>Burrata Salad</td>
        <td>18 SAR</td>
    </tr>
    <tr>
        <td>Chicken Alfredo</td>
        <td>21 SAR</td>
    </tr>
    <tr>
        <td>Veal Marsala</td>
        <td>24 SAR</td>
    </tr>
    <tr>
        <td>Mushroom Risotto</td>
        <td>18 SAR</td>
    </tr>
    <tr>
        <td>Spaghetti and Meatballs</td>
        <td>23 SAR</td>
    </tr>
    <tr>
        <td>Lasagna</td>
        <td>24 SAR</td>
    </tr>
</table>`
function fact() {
    var num = Math.floor(Math.random() * (facts.length));
    document.getElementById("fact-display").innerHTML = facts[num];
}

function sub() {
    alert("We have recieved your reservation, we will contact you as soon as possible to confirm it.")
}

function contact() {
    alert("We have recieved your message.\nThanks for contacting us.")
}

function breakfast() {
    document.getElementById("menu").innerHTML = br;
}

function lunch() {
    document.getElementById("menu").innerHTML = lu;
}