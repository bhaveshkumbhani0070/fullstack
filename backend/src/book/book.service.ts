import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';
import { EntityManager, getManager } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private bookRepository: BookRepository,
  ) {}

  async buyBook(bookId: number): Promise<Book | null> {
    const book = await this.bookRepository.findOne({ where: { id: bookId } });

    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    if (book.discountRate > 0) {
      const discountedPrice = book.price * (1 - book.discountRate / 100);
      book.price = discountedPrice;
    }

    const entityManager: EntityManager = getManager(); // Obtain the EntityManager
    const updatedBook = await entityManager.save(Book, book);

    return updatedBook;
  }
}
