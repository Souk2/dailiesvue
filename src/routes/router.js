import { createRouter, createWebHistory } from "vue-router";
import DashboardComponents from "../components/DashboardComponents.vue";
import LoginComponents from "../components/LoginComponents.vue";
import AdminComponents from "../components/AdminComponents.vue";
import ModuleComponents from "../components/ModuleComponents.vue";
import NoteComponents from "../components/NoteComponents.vue";
import IncomeExpenseComponents from "../components/IncomeExpenseComponents.vue";
import IncomeDetailComponents from "../components/IncomeDetailComponents.vue";
import ExpenseDetailComponents from "../components/ExpenseDetailComponents.vue";
import PlanComponents from "../components/PlanComponents.vue";
import PlanSuccessComponents from "../components/PlanSuccessComponents.vue";
import PlanNotSuccessComponents from "../components/PlanNotSuccessComponents.vue";
import SchoolTableComponents from "../components/SchoolTableComponents.vue";
import DailyComponents from "../components/DailyComponents.vue";

const routes = [
    {
        path: '/login',
        name: 'LoginComponent',
        component: LoginComponents
    },
    {
        path: '/dashboard',
        name: 'DashboardComponents',
        component: DashboardComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/admin',
        name: 'AdminComponents',
        component: AdminComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/modules',
        name: 'ModuleComponents',
        component: ModuleComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/notes',
        name: 'NoteComponents',
        component: NoteComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/income_expenses',
        name: 'IncomeExpenseComponents',
        component: IncomeExpenseComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/income_details',
        name: 'IncomeDetailComponents',
        component: IncomeDetailComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/expense_details',
        name: 'ExpenseDetailComponents',
        component: ExpenseDetailComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/plan',
        name: 'PlanComponents',
        component: PlanComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/plansuccess',
        name: 'PlanSuccessComponents',
        component: PlanSuccessComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/plannotsuccess',
        name: 'PlanNotSuccessComponents',
        component: PlanNotSuccessComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/schooltable',
        name: 'SchoolTableComponents',
        component: SchoolTableComponents,
        meta: {requireAuth: true}
    },
    {
        path: '/dailies',
        name: 'DailyComponents',
        component: DailyComponents,
        meta: {requireAuth: true}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) =>{
    const isAuthenticated = !!localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requireAuth)){
        if(!isAuthenticated){
            next('/login');
        }
        else{
            next();
        }
    }else{
        next();
    }
});

export default router;