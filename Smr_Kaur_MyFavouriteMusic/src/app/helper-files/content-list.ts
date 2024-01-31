// src/app/helper-files/content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  // Getter function
  get content(): Content[] {
    return this.contentArray;
  }

  // Add function
  add(contentItem: Content): void {
    this.contentArray.push(contentItem);
  }

  // Function to get the number of items in the array
  getItemCount(): number {
    return this.contentArray.length;
  }

  // Function to generate HTML output for a Content item at a specific index
  getContentAtIndex(index: number): string {
    const contentItem = this.contentArray[index];

    if (!contentItem) {
      return 'Index out of bounds';
    }

    const { title, description, creator, imgURL, type } = contentItem;

    // Bonus: Create an image tag if imgURL is provided
    const imgTag = imgURL ? `<img src="${imgURL}" alt="${title}">` : '';

    return `
      <div>
        <h2>${title}</h2>
        <p>${description}</p>
        <p>Creator: ${creator}</p>
        ${imgTag}
        <p>Type: ${type || 'N/A'}</p>
      </div>
    `;
  }
}
