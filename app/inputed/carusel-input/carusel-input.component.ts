import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carusel-input',
  standalone: true,
  imports: [],
  templateUrl: './carusel-input.component.html',
  styleUrl: './carusel-input.component.scss'
})
export class CaruselInputComponent{
  @ViewChild('inputContainer') inputContainer!: ElementRef;
  @Input() existingImagePaths: string[] = [];

  ngAfterViewInit(): void {
    this.displayExistingImages();
  }

  displayExistingImages(): void {
    this.existingImagePaths.forEach(path => {
      this.addImage(path);
    });
  }
  

  addImage(path: string = ''): void {
    const inputField = this.inputContainer.nativeElement.querySelector('.image-input');
    const newInputField = document.createElement('input');
    newInputField.type = 'text';
    newInputField.value = path;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      this.inputContainer.nativeElement.removeChild(newInputField);
      this.inputContainer.nativeElement.removeChild(deleteButton);
    });
    this.inputContainer.nativeElement.insertBefore(deleteButton, inputField);
    this.inputContainer.nativeElement.insertBefore(newInputField, deleteButton);
  }

  submitImages(): void {
    const carouselImages = document.querySelectorAll('.splide__list li img') as NodeListOf<HTMLImageElement>;
    const inputFields = this.inputContainer.nativeElement.querySelectorAll('.image-input');
    inputFields.forEach((inputField: HTMLInputElement) => {
      const imagePath = inputField.value;
      let imageExists = false;
      carouselImages.forEach(img => {
        if (img.src === imagePath) {
          imageExists = true;
          return;
        }
      });
      if (!imageExists) {
        const newLi = document.createElement('li');
        const newImg = document.createElement('img');
        newImg.src = imagePath;
        newLi.appendChild(newImg);
        document.querySelector('.splide__list')?.appendChild(newLi);
      }
    });
  }
}
