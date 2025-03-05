package org.project.libraryProject.controller;

import org.project.libraryProject.entity.Notice;
import org.project.libraryProject.service.NoticeService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notice")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService){
        this.noticeService = noticeService;
    }

    @GetMapping("/notice")
    List<Notice> all() {
        return noticeService.getAllNoticeList();
    }
    @GetMapping("/noticeList")
    public HashMap<String, Object> notice(){
        HashMap<String, Object> dataMap = new HashMap<String, Object>();
        List<Notice> noticeList = noticeService.getAllNoticeList();

        // System.out.println(noticeList);
        dataMap.put("result", "success");
        dataMap.put("noticeList", noticeList);
        return dataMap;
    }
}
