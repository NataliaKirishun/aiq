import { Routes } from "@angular/router";
import { Home } from "./home/home.component";
import { TrainingList } from "./training/training-list/training-list.component";
import { CreateTarining } from "./training/create-training/create-training.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'training',
        component: TrainingList,
        children: [
            {
                path: 'create',
                component: CreateTarining, 
            }
        ]
    }
]