import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

const MENU: MenuItem[] = [
  { name: 'Home', url: '/store', items: [] },
  {
    name: 'Menu',
    url: '/store/menu',
    items: [
      { name: 'Coffee', url: '/store/menu/coffee' },
      { name: 'Smoothies', url: '/store/menu/smoothies' },
      { name: 'Soft Drinks', url: '/store/menu/softdrink' },
      { name: 'Juice', url: '/store/menu/juice' },
    ],
  },
  { name: 'About', url: '/store/about', items: [] },
  { name: 'Contact', url: 'store/contact', items: [] },
];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu = MENU;
  constructor() {}

  ngOnInit(): void {}
}
