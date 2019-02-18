package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Administratie;
import com.littleworld.todo.model.Docent;
import com.littleworld.todo.services.AdminService;
import com.littleworld.todo.services.DocentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class DocentController {
    @Autowired
    private DocentService docentService;

//    @ResponseBody
//    @RequestMapping(value = "/docent", method = RequestMethod.POST)
//    public long create(@RequestBody Docent docent){
//        return docentService.save(docent).getId();
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/docent", method = RequestMethod.GET)
//    public List<Docent> findAll(){
//        return (List<Docent>)docentService.findAll();
//    }
//
//    @ResponseBody
//    @RequestMapping(value = "/docent/{id}", method = RequestMethod.GET)
//    public Optional<Docent> docentById(@PathVariable long id){
//        return docentService.findById(id);
//    }
//
//    @RequestMapping(value = "/pageDocent", method = RequestMethod.GET)
//    public String page(){
//        return "docent";
//    }
//
//
////    @ResponseBody
////    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
////    public boolean authenticate(@RequestBody Docent docent) {
////        List<Docent> lijst = (List<Docent>) docentService.findByUserNameAndPassWord(docent.getUserName(), docent.getPassWord());
////        return !lijst.isEmpty();
////    }
//
//    @ResponseBody
//    @RequestMapping(value = "/docent/{id}", method = RequestMethod.PUT)
//    public long updateDocent(@PathVariable long id, @RequestBody Docent docent) {
//        return docentService.save(docent).getId();
//    }
//
//    @ResponseStatus(value = HttpStatus.OK)
//    @RequestMapping(value = "/docent/{id}", method = RequestMethod.DELETE)
//    public void updateDocent(@PathVariable long id) {
//        docentService.deleteById(id);
//    }
}
