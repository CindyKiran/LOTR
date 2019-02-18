package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Vak;
import com.littleworld.todo.services.VakService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class VakController {
    @Autowired
    private VakService vakService;

    @ResponseBody
    @RequestMapping(value = "/vak", method = RequestMethod.POST)
    public long create(@RequestBody Vak vak){
        return vakService.save(vak).getId();
    }
    @ResponseBody
    @RequestMapping(value = "/vak", method = RequestMethod.GET)
    public List<Vak> findAll(){
        return (List<Vak>)vakService.findAll();
    }
    @ResponseBody
    @RequestMapping(value = "/vak/{id}", method = RequestMethod.GET)
    public Optional<Vak> vakById(@PathVariable long id){
        return vakService.findById(id);
    }
    @RequestMapping(value = "/pageVak", method = RequestMethod.GET)
    public String page(){
        return "vak";
    }
}