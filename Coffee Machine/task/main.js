// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let count_water = 400
let count_milk = 540
let count_grams_of_coffee = 120
let count_cups = 9
let count_money = 550

function show_machines_resources() {
    console.log(`\nThe coffee machine has:
${count_water} ml of water
${count_milk} ml of milk
${count_grams_of_coffee} g of coffee beans
${count_cups} disposable cups
$${count_money} of money\n`)
}


function resource_calculation(water,
                              milk,
                              grams_of_coffee,
                              cups,
                              money,
                              operation) {
    count_money += money
    if (operation === "-") {
        count_water -= water
        count_milk -= milk
        count_grams_of_coffee -= grams_of_coffee
        count_cups -= cups
        return
    }
    count_water += water
    count_milk += milk
    count_grams_of_coffee += grams_of_coffee
    count_cups += cups


}function can_is_it_make_coffee(water,
                                milk,
                                grams_of_coffee,
                                cups,) {
    return Math.min(count_water - water,
        count_milk - milk,
        count_grams_of_coffee - grams_of_coffee,
        count_cups - cups,) >= 1;
}




function main() {
    while (true) {
        console.log("Write action (buy, fill, take, remaining, exit):")
        let choice_action = input()
        console.log()

        switch (choice_action) {
            case "buy":
                console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:")
                let choice_drink = Number(input())
                console.log()

                switch (choice_drink) {
                    case 1:
                        if (!can_is_it_make_coffee(250, 0, 16, 1)){
                            console.log("Sorry, not enough water!\n")
                            continue
                        }
                        resource_calculation(250, 0, 16, 1, 4, "-")
                        break

                    case 2:
                        if (!can_is_it_make_coffee(350, 75, 20, 1)){
                            console.log("Sorry, not enough water!\n")
                            continue
                        }
                        resource_calculation(350, 75, 20, 1, 7, "-")
                        break

                    case 3:
                        if (!can_is_it_make_coffee(200, 100, 12, 1)){
                            console.log("Sorry, not enough water!\n")
                            continue
                        }
                        resource_calculation(200, 100, 12, 1, 6, "-")
                        break
                }
                console.log("I have enough resources, making you a coffee!\n")
                break

            case "fill":
                console.log("Write how many ml of water you want to add:")
                let water = Number(input())
                console.log("Write how many ml of milk you want to add:")
                let milk = Number(input())
                console.log("Write how many grams of coffee beans you want to add:")
                let grams_of_coffee = Number(input())
                console.log("Write how many disposable coffee cups you want to add:")
                let cups = Number(input())
                resource_calculation(water, milk, grams_of_coffee, cups, 0, "+")
                break

            case "take":
                console.log(`I gave you $${count_money}`)
                count_money = 0
                break

            case "remaining":
                show_machines_resources()
                break

            case "exit":
                return
        }
    }
}

main()