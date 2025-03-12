package org.project.libraryProject.controller;

import org.project.libraryProject.entity.Notice;
import org.project.libraryProject.service.NoticeService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/notice")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }

    @GetMapping
    public HashMap<String, Object> notice(){
        HashMap<String, Object> dataMap = new HashMap<String, Object>();
        List<Notice> noticeList = noticeService.getAllNoticeList();

        // System.out.println(noticeList);
        dataMap.put("result", "success");
        dataMap.put("noticeList", noticeList);
        return dataMap;
    }
}