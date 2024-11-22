import { Component, OnInit } from '@angular/core';
import { iCategory } from 'src/app/shared/interfaces/category.interface';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  dataSource!: iCategory[];

  ngOnInit(): void {
    this.getAll();
  }

  constructor(private category: CategoryService) {
  }

  getAll() {
    this.category.getAll().subscribe((data) => {
      this.dataSource = data.result;
    })
    console.log(this.dataSource);
  }
}
