package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Administratie;
import com.littleworld.todo.model.Opleiding;
import com.littleworld.todo.services.AdminService;
import com.littleworld.todo.services.OpleidingService;
import org.graalvm.compiler.nodes.calc.IntegerDivRemNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class OpleidingController {
    @Autowired
    private OpleidingService opleidingService;

    @ResponseBody
    @RequestMapping(value = "/opleiding", method = RequestMethod.POST)
    public long create(@RequestBody Opleiding opleiding){
        return opleidingService.save(opleiding).getId();
    }
    @ResponseBody
    @RequestMapping(value = "/opleiding", method = RequestMethod.GET)
    public List<Opleiding> findAll(){
        return (List<Opleiding>)opleidingService.findAll();
    }
    @ResponseBody
    @RequestMapping(value = "/opleiding/{id}", method = RequestMethod.GET)
    public Optional<Opleiding> opleidingById(@PathVariable long id){
        return opleidingService.findById(id);
    }
    @RequestMapping(value = "/pageOpleiding", method = RequestMethod.GET)
    public String page(){
        return "opleiding";
    }
}