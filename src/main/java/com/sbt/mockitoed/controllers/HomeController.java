package com.sbt.mockitoed.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by vasiliy on 24.12.16.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/th",method = RequestMethod.GET)
    public String index(Model model){
        model.addAttribute("key","Hello, Mockito");
        return "index";
    }





}
