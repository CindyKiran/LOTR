package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Opleiding;
import com.littleworld.todo.model.Student;
import com.littleworld.todo.model.Vak;
import com.littleworld.todo.services.StudentService;
import com.littleworld.todo.services.VakService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class VakController {
    @Autowired
    private VakService vakService;

    @Autowired
    private StudentService studentService;
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

    @PutMapping("/vak/{id}/schrijfin")
    public ResponseEntity<Object> updateInschrijving(@PathVariable long id) {
        Optional<Vak> test = vakService.findById(id);

        if (!test.isPresent()) {
            return ResponseEntity.notFound().build();
        } else{
            Vak target = test.get();
            target.setIngeschreven(true);
            vakService.save(target);
            return ResponseEntity.ok(target);
        }
    }

    @RequestMapping(value = "/pageVak", method = RequestMethod.GET)
    public String page(){
        return "vak";
    }

}