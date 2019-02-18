package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Administratie;
import com.littleworld.todo.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class AdminController {
    @Autowired private AdminService adminService;

    @ResponseBody
    @RequestMapping(value = "/admin", method = RequestMethod.POST)
    public long create(@RequestBody Administratie admin){
        return adminService.save(admin).getId();
    }
    @ResponseBody
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public List<Administratie> findAll(){
        return (List<Administratie>)adminService.findAll();
    }
    @ResponseBody
    @RequestMapping(value = "/admin/{id}", method = RequestMethod.GET)
    public Optional<Administratie> adminById(@PathVariable long id){
        return adminService.findById(id);
    }
    @RequestMapping(value = "/pageAdmin", method = RequestMethod.GET)
    public String page(){
        return "admin";
    }
}
