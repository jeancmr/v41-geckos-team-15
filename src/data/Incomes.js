import Savings from "../assets/images/accounts-dashboard/categories/savings.png";
import Services from "../assets/images/accounts-dashboard/categories/services.png";
import Investments from "../assets/images/accounts-dashboard/categories/investments.png";

const incomes = [
    {
        id: 1,
        type: 'income',
        name: "Salary",
        category: "Investments",
        created: "2022-06-16",
        amount: (5000).toFixed(2),
        currency: "$",
        cover: Investments,
    },
    {
        id: 2, type: 'income',
        name: "Saved for gifts",
        category: "Savings",
        created: "2022-06-29",
        amount: (200).toFixed(2),
        currency: "$",
        cover: Savings,
    },
    {

        id: 3, type: 'income',
        name: "Salary",
        category: "Investments",
        created: "2022-07-16",
        amount: (5000).toFixed(2),
        currency: "$",
        cover: Investments,
    },

    {

        id: 4, type: 'income',
        name: "Capital Gain (Property)",
        category: "Investments",
        created: "2022-07-17",
        amount: (500).toFixed(2),
        currency: "$",
        cover: Investments,
    },
    {
        id: 5, type: 'income',
        name: "Business income",
        category: "Investments",
        created: "2022-07-29",
        amount: (200).toFixed(2),
        currency: "$",
        cover: Investments,
    },

    {
        id: 6, type: 'income',
        name: "Dividends (Shares)",
        category: "Investments",
        created: "2022-07-30",
        amount: (200).toFixed(2),
        currency: "$",
        cover: Investments,
    },
    {
        id: 7, type: 'income',
        name: "Salary",
        category: "Investments",
        created: "2022-08-16",
        amount: (5000).toFixed(2),
        currency: "$",
        cover: Investments,
    },
    {

        id: 8, type: 'income',
        name: "Moved to savings",
        category: "Savings",
        created: "2022-08-21",
        amount: (350).toFixed(2),
        currency: "$",
        cover: Savings,
    },
    {
        id: 9, type: 'income',
        name: "Interest Recerved",
        category: "Services",
        created: "2022-08-29",
        amount: (150).toFixed(2),
        currency: "$",
        cover: Services,
    },
    {
        id: 10, type: 'income',
        name: "Salary",
        category: "Investments",
        created: "2022-09-16",
        amount: (5000).toFixed(2),
        currency: "$",
        cover: Investments,
    },
    {
        id: 11, type: 'income',
        name: "Dividends (Shares)",
        category: "Investments",
        created: "2022-09-30",
        amount: (200).toFixed(2),
        currency: "$",
        cover: Investments,
    },
]

export default incomes;