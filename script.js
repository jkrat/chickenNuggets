var order = {
    items: [],
    amount: 38,
    computeOrder: function() {
        function findBoxCombination(current, combination) {
            if (current === order.amount) {
                return combination;
            } else if (current > order.amount) {
                return null;
            } else {
                return ((findBoxCombination(current + 20, combination + "20 ")) || 
                (findBoxCombination(current + 9, combination + "9 "))) ||
                (findBoxCombination(current + 6, combination + "6 "));
            }
        }
        var combination = findBoxCombination(0, "");
        if (combination === null) {
            combination = [0];
        } else {
            combination = combination.split(" ");
            combination.pop();    
        }
        order.items = combination;
        return order.items;
    },
};

var handlers = {
    changeOrder: function() {
        var changeOrderTextInput = document.getElementById('nuggetCount');
        order.amount = (Number(changeOrderTextInput.value));
        changeOrderTextInput.value = '';
        console.log(order.computeOrder());
        view.displayOrder();
    }
}

var view = {
    displayOrder: function() {
        var orderDiv = document.getElementById("nuggets");
        orderDiv.innerHTML = '';
        
        order.items.forEach(function(item, position) {
            var itemPiece = document.createElement('img');
            itemPiece.className = order.items[position];
            if (itemPiece.className == "6") {
                itemPiece.src = "http://faithfulsaver.com/wp-content/uploads/2017/06/mcnuggets.jpg";
            } else if (itemPiece.className == "9") {
                itemPiece.src = "http://lamedicinaestetica.files.wordpress.com/2013/07/dott-loiacono-emilio-alessio-medicina-chirurgia-estetica-benessere-dietologia-sessuologia-ecografie-tabagismo-smettere-di-fumare-i-mcnuggets-del-mcdonald_s-contengono-veramente-pollo.jpg";
            } else if (itemPiece.className == "20") {
                itemPiece.src = "https://vignette.wikia.nocookie.net/ronaldmcdonald/images/b/ba/Mcnuggets.png/revision/latest?cb=20140416233049";
            }

            orderDiv.appendChild(itemPiece);
        });
    }
};

