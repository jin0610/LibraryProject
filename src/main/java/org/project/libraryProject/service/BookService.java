package org.project.libraryProject.service;

import org.project.libraryProject.entity.Book;
import org.springframework.data.domain.Page;

public interface BookService {
    Page<Book> getBookList(Integer categoryId, int page);

}
