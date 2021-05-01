let totalCost = 302, totalItems = 10, sale = 'ДАРИМ300';
var endCost = 0;


function count_cart(totalCost, totalItems, sale = null) {

    let endCost = totalCost;

    if (sale == 'ДАРИМ300' && endCost > 300) {
        endCost -= 300;
    } else if (sale == 'ДАРИМ300' && endCost <= 300) {
        endCost = 0;
    }

    if (totalItems >= 10) {
        endCost *= 0.95;
    }

    if (endCost > 50000) {
        endCost = (endCost - 50000) * 0.8 + 50000;
    }

    if (sale == 'СКИДКА15' && endCost >= 20000) {
        endCost *= 0.85;
    }

    return endCost;
}


count_cart(totalCost, totalItems, sale);

export default count_cart;