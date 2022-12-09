import Queens from "../../pages/Queens";
import Bee from "../../pages/Bee";
import ProductionBee from "../../pages/ProductionBee";
import Info from "../../pages/Info";
import Basket from "../../pages/Basket";



export const RouterArray = [
    {path: '/queens', component: Queens, exact: true},
    {path: '/bee', component: Bee, exact: true},
    {path: '/production', component: ProductionBee, exact: true},
    {path: '/info', component: Info, exact: true},
    {path: '/basket', component: Basket, exact: true},
]

