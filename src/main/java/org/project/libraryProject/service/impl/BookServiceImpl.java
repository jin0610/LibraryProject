package org.project.libraryProject.service.impl;

import org.project.libraryProject.entity.Book;
import org.project.libraryProject.repository.BookRepository;
import org.project.libraryProject.service.BookService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Page<Book> getBookList(Integer categoryId, int page) {
        int pageSize = 12;
        page = Math.max(0, page - 1);

        return bookRepository.findAll(PageRequest.of(page, pageSize));
    }
}
