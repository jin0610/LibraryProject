  package org.project.libraryProject.controller;

  import org.project.libraryProject.service.NoticeService;
  import org.springframework.stereotype.Controller;
  import org.springframework.web.bind.annotation.RequestMapping;
  import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class MainController {

    @RequestMapping("")
    public String main(){
        return "index";
    }

    @RequestMapping(value = "/api/main", method = RequestMethod.GET)
    public String home(){
        String msg = "project Start";
        return msg;
    }
}
