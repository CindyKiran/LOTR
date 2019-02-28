package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Administratie;

import com.littleworld.todo.model.Docent;
import com.littleworld.todo.model.Student;
import com.littleworld.todo.model.Vak;

import com.littleworld.todo.services.DocentService;
import com.littleworld.todo.services.VakService;
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

    @Autowired
    private VakService vakService;

    @ResponseBody
    @RequestMapping(value = "/docent", method = RequestMethod.POST)
    public long create(@RequestBody Docent docent){
        return docentService.save(docent).getId();
    }

    @ResponseBody
    @RequestMapping(value = "/docent", method = RequestMethod.GET)
    public List<Docent> findAll(){
        return (List<Docent>)docentService.findAll();
    }

    @ResponseBody
    @RequestMapping(value = "/docent/{id}", method = RequestMethod.GET)
    public Optional<Docent> docentById(@PathVariable long id){
        return docentService.findById(id);
    }

    @RequestMapping(value = "/pageDocent", method = RequestMethod.GET)
    public String page(){
        return "docent";
    }


    @ResponseBody
    @RequestMapping(value = "/authenticateDocent", method = RequestMethod.POST)
    public Docent authenticateDocent(@RequestBody Docent docent) {
//        List<Docent> lijst = (List<Docent>) docentService.findByUserNameAndPassWord(docent.getUserName(), docent.getPassWord());
//        return !lijst.isEmpty();

        List<Docent> lijst = (List<Docent>) docentService.findByUserNameAndPassWord(docent.getUserName(), docent.getPassWord());
//        System.out.println(lijst.size());
        if (lijst.size()==1) {
            return lijst.get(0);
        } else {
            return null;
        }
    }


    @ResponseBody
    @RequestMapping(value = "/docent/{id}", method = RequestMethod.PUT)
    public long updateDocent(@PathVariable long id, @RequestBody Docent docent) {
        return docentService.save(docent).getId();
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/docent/{id}", method = RequestMethod.DELETE)
    public void updateDocent(@PathVariable long id) {
        docentService.deleteById(id);
    }

    @ResponseBody
    @RequestMapping(value = "/docent/{docentId}/vak/{vakId}", method = RequestMethod.GET)
    public Docent updateVak(@PathVariable long docentId, @PathVariable long vakId) {
        Optional <Docent>  docent = this.docentService.findById(docentId);
        Optional<Vak> vak = this.vakService.findById(vakId);
        if(docent.isPresent() && vak.isPresent()){
            docent.get().getVakken().add(vak.get());
            return docentService.save(docent.get());
        }
        return null;
    }
}
