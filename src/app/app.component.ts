import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  objTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, delectus?",
    "Molestiae porro sed eveniet fugiat quibusdam exercitationem, ducimus mollitia quidem quasi assumenda.",
    "Voluptatibus cumque vitae accusamus nostrum. Cumque, fugiat beatae? Quidem illum pariatur sit ex aliquid similique, doloremque neque eveniet? Fugit porro repellat non.",
    "Nesciunt assumenda ipsam quis recusandae id saepe excepturi ut dolore quidem soluta rerum, earum in rem facere!",
    "Nemo saepe et magnam, quidem maxime autem illo? Quis iusto beatae facere doloribus vel sint quod, necessitatibus perferendis repellat?",
    "Distinctio veniam porro praesentium dolor odio assumenda, atque qui eveniet dolore aliquid mollitia cumque recusandae amet quas sint perspiciatis nobis.",
    "Similique corporis modi cum sunt tempore at, voluptatum totam delectus quam dolore eveniet iusto in vero? Voluptatem, magnam!",
    "Porro ea et quam animi explicabo, fugiat, incidunt sit assumenda quibusdam debitis velit quod dolor perferendis in fuga sapiente aut ut."
  ]

  objTitles = [
    "Aborta Fluera",
    "Merel Odin",
    "Gerenum",
    "Bisto Proku",
    "Kataxi Mersh",
    "Flitutti Borsum",
    "Ongus Servanus",
    "Mellekum Forte"
  ]

  objImages = [
    "assets/img/obj-1.jpg",
    "assets/img/obj-2.jpg",
    "assets/img/obj-3.jpg",
    "assets/img/obj-4.jpg",
    "assets/img/obj-5.jpeg",
    "assets/img/obj-6.jpg",
    "assets/img/obj-7.jpeg",
    "assets/img/obj-8.jpg",
  ]

  buttonClicked() {
    alert(`Hallo wie geht's dir?`)
  }
}
