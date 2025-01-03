  package org.project.libraryProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;


  @Controller
public class MainController {

    @RequestMapping("/")
    public String main(){
        return "index.jsp";
    }

    @ResponseBody
    @RequestMapping(value = "/api/main", method = RequestMethod.GET)
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public HashMap<String, Object> home(){
        HashMap<String, Object> map = new HashMap<>();
        map.put("msg","project start");
        return map;
    }
}
