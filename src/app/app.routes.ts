import { Routes } from "@angular/router";
import { Home } from "./home/home.component";
import { TrainingList } from "./training/training-list/training-list.component";
import { CreateTraining } from "./training/create-training/create-training.component";
import { TrainingComponent } from "./training/training/training.component";
import { EditTraining } from "./training/edit-training/edit-training.component";

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
        component: TrainingComponent,
        children: [
            {
                path: 'list',
                component: TrainingList,    
            },
            {
                path: 'create',
                component: CreateTraining,   
            },
            {
                path: 'edit/:trainingId',
                component: EditTraining,
            },          
        ],
    },
];

const GeminiAPIKey = 'AIzaSyAkUGyKarsvi8PEuAm-UogGPvbvJCakUqM';