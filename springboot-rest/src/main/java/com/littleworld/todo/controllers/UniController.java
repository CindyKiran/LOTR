package com.littleworld.todo.controllers;

import com.littleworld.todo.model.University;
import com.littleworld.todo.services.UniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class UniController {
    @Autowired private UniService uniService;

        @ResponseBody
        @RequestMapping(value = "/uni", method = RequestMethod.POST)
        public long create(@RequestBody University uni){
            return uniService.save(uni).getId();
        }

        @ResponseBody
        @RequestMapping(value = "/uni", method = RequestMethod.GET)
        public List<University> findAll(){
            return (List<University>)uniService.findAll();
        }
        @ResponseBody
        @RequestMapping(value = "/uni/{id}", method = RequestMethod.GET)
        public Optional<University> uniById(@PathVariable long id){
            return uniService.findById(id);
        }

        @RequestMapping(value = "/page", method = RequestMethod.GET)
        public String page(){
            return "uni";
        }
}
