import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeArticleComponent } from './home-article/home-article.component';
import { PrimeDecompositionArticleComponent } from './prime-decomposition-article/prime-decomposition-article.component';
import { TestArticleComponent } from './test-article/test-article.component';

const routes: Routes = [
  {path: 'home', component: HomeArticleComponent},
  {path: 'prime-decomposition', component: PrimeDecompositionArticleComponent},
  {path: 'test-article', component: TestArticleComponent},
  {path: 'cv', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
