package org.project.libraryProject.controller;

import lombok.extern.slf4j.Slf4j;
import org.project.libraryProject.dto.NoticeWriteDTO;
import org.project.libraryProject.entity.Notice;
import org.project.libraryProject.service.NoticeService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/notice")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }

    @GetMapping
    public Page<Notice> getAllNotices(@RequestParam(value = "page", required = false, defaultValue = "1") int page) {
        return noticeService.getNoticeList(page);
    }

//    noticeId로 공시사항 글 조회
    @GetMapping("/detail")
    public Notice getNoticebyNoticeId(@RequestParam(value="id") int noticeId){
        return noticeService.getNoticebyId(noticeId);
    }

    @PostMapping("/write")
    public ResponseEntity<String> writeNotice(@RequestBody NoticeWriteDTO dto){
        System.out.println(dto);
        String result = noticeService.writeNotice(dto);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/edit")
    public ResponseEntity<String> editNotice(@RequestBody NoticeWriteDTO dto){
        System.out.println(dto);
        String result = noticeService.editNotice(dto);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/delete")
    public ResponseEntity<String> deleteNotice(@RequestParam(value = "id") int noticeId){
        String result = noticeService.deleteNotice(noticeId);
        return ResponseEntity.ok(result);
    }
}