"use strict";

const cookingScedule = new Map([
    ["Пицца", "Виктор"],
    ["Суши", "Ольга"],
    ["Десерт", "Дмитрий"],
]);

const menu = new Map([
    ["Пицца", new Set(["Маргарита", "Пепперони", "Три сыра"])],
    ["Суши", new Set(["Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки"])],
    ["Десерт", new Set(["Тирамису", "Чизкейк"])]
]);

class Client {
    constructor(firstname) {
        this.firstname = firstname;
    }
}

class Manager {
    finalOrder = new Map();
    count;
    newOrder(client, ...order) {
        this.count = 0
        order.forEach((element) => {
            if (menu.get(element.type).has(element.name)) {
                this.count++;
            }
        });
        if (this.finalOrder.get(client) === undefined) {
            if (this.count === order.length) {
                this.finalOrder.set(client, order);
            }
        } else {
            if (this.count === order.length) {
                this.finalOrder.get(client).push(...order);
            }
        }
        if (this.count === order.length) {
            console.log(`Клиент ${client.firstname} заказал:`);
            const arr = formatArray(this.finalOrder.get(client));
            arr.forEach((e) => {
                const str = `${e.type} "${e.name}" - ${e.quantity}; готовит повар ${cookingScedule.get(e.type)}`
                console.log(str);
            })
        }
    }
}

const formatArray = (array) => {
    let str = "";
    let index;
    for (let i = 0; i < array.length; i++) {
        str = array[i].name;
        for (let j = i + 1; j < array.length; j++) {
            if (str === array[j].name) {
                array[i].quantity = array[i].quantity + array[j].quantity;
                index = j
            }
        }
    }
    delete array[index]
    return array;
}

const manager = new Manager();

manager.newOrder(
    new Client("Алексей"), { name: "Калифорния", quantity: 1, type: "Суши" }, { name: "Маргарита", quantity: 1, type: "Пицца" },
);

manager.newOrder(
    new Client("Мария"), { name: "Пепперони", quantity: 1, type: "Пицца" }, { name: "Тирамису", quantity: 1, type: "Десерт" },
);

const client = new Client("Ирина");
manager.newOrder(
    client, { name: "Чизкейк", quantity: 3, type: "Десерт" }
);