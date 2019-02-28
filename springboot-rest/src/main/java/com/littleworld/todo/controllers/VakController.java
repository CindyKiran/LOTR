package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Docent;
import com.littleworld.todo.model.Opleiding;
import com.littleworld.todo.model.Student;
import com.littleworld.todo.model.Vak;
import com.littleworld.todo.services.DocentService;
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
    @Autowired
    private DocentService docentService;

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
    public Result vakById(@PathVariable long id){
        Optional<Vak> vak = vakService.findById(id);
        Result result = new Result();
        result.copyValues(vak.get());

        Iterable<Docent> docenten = docentService.findAll();
        docenten.forEach(
                (Docent doc) -> {
                    for (Vak v: doc.getVakken()) {
                        if (v.getId()==id) {
                            result.docent = doc;
                        }
                    }
                }
        );
        return result;
    }

    @RequestMapping(value = "/pageVak", method = RequestMethod.GET)
    public String page(){
        return "vak";
    }



}

class Result extends Vak{
    long idR ;
    Docent docent;

    public long getId() {
        return idR;
    }

    public void copyValues(Vak vak) {
        this.idR = vak.getId();
        this.setNaam(vak.getNaam());
        this.setMaxStudenten(vak.getMaxStudenten());

    }

    public Docent getDocent() {
        return docent;
    }

    public void setDocent(Docent docent) {
        this.docent = docent;
    }
}