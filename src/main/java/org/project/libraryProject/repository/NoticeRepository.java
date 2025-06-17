package org.project.libraryProject.repository;

import org.project.libraryProject.dto.NoticeWriteDTO;
import org.project.libraryProject.entity.Notice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Integer> {
    Page<Notice> findAll(Pageable pageable);

    Notice findNoticeByNoticeId (int noticeId);

    String deleteNoticeByNoticeId(int noticeId);

}
