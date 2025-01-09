  package org.project.libraryProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

  @Controller
public class MainController {

    private static final Logger logger = LoggerFactory.getLogger(MainController.class);


    @RequestMapping("/")
    public String main(){

        logger.info("This is an info message.");
        logger.debug("This is a debug message.");
        logger.error("This is an error message.");

        return "index";
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
