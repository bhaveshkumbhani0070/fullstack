import { Controller, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post(':id/buy')
  async buyBook(@Param('id') bookId: number) {
    const purchasedBook = await this.bookService.buyBook(bookId);
    if (purchasedBook) {
      return { message: 'Book purchased successfully', book: purchasedBook };
    } else {
      return { message: 'Failed to purchase book' };
    }
  }
}
