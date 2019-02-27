package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Opleiding;
import com.littleworld.todo.model.Student;
import com.littleworld.todo.model.Vak;
import com.littleworld.todo.services.OpleidingService;
import com.littleworld.todo.services.StudentService;
import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import org.apache.catalina.connector.Response;
import com.littleworld.todo.services.VakService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudentController {
//    @Autowired
//    private StudentService studentService;

    @Autowired
    private OpleidingService opleidingService;

    @Autowired
    private VakService vakService;

    @Autowired
    private StudentService studentService;
    private static String UPLOADED_FOLDER = "C://Users//Denisa//Downloads";


    @ResponseBody
    @RequestMapping(value = "/student", method = RequestMethod.POST)
    public long create(@RequestBody Student student) {
        Optional<Opleiding> optionalOpleiding = this.opleidingService.findById(student.getOpleiding().getId()); // dit is slecbt
        if(optionalOpleiding.isPresent()) {
            Opleiding bestaande = optionalOpleiding.get();
            student.setOpleiding(bestaande);
            return studentService.save(student).getId();
        }
        else {
            return -1;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public List<Student> findAll() {
        return (List<Student>) studentService.findAll();
    }

    @ResponseBody
    @RequestMapping(value = "/student/{id}", method = RequestMethod.GET)
    public Optional<Student> studentById(@PathVariable long id) {
        return studentService.findById(id);
    }

    @RequestMapping(value = "/pageStudent", method = RequestMethod.GET)
    public String page() {
        return "student";
    }

    @ResponseBody
    @RequestMapping(value = "/authenticateStudent", method = RequestMethod.POST)
    public Student authenticateStudent(@RequestBody Student student) {
        List<Student> lijst = (List<Student>) studentService.findByUserNameAndPassWord(student.getUserName(), student.getPassWord());
//        System.out.println(lijst.size());
        if (lijst.size()==1) {
            return lijst.get(0);
        } else {
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/student/{id}", method = RequestMethod.PUT)
    public long updateStudent(@PathVariable long id, @RequestBody Student student) {
        return studentService.save(student).getId();
    }

    @ResponseBody
    @RequestMapping(value = "/student/{studentId}/vak/{vakId}", method = RequestMethod.GET)
    public Student updateVak(@PathVariable long studentId,@PathVariable long vakId) {
        Optional <Student>  student = this.studentService.findById(studentId);
        Optional<Vak> vak = this.vakService.findById(vakId);
        if(student.isPresent() && vak.isPresent()){
            student.get().addIngeschrevenVakken(vak.get());
            return studentService.save(student.get());
        }
        return null;
    }

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/student/{id}", method = RequestMethod.DELETE)
    public void updateStudent(@PathVariable long id) {
        studentService.deleteById(id);
    }

    @PostMapping("uploadFile")
    public ResponseEntity<?> uploadFile(
            @RequestParam("file") MultipartFile uploadfile) {


        if (uploadfile.isEmpty()) {
            return new ResponseEntity("please select a file!", HttpStatus.OK);
        }

        try {

            saveUploadedFiles(Arrays.asList(uploadfile));

        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.SERVICE_UNAVAILABLE);
        }

        return new ResponseEntity("Successfully uploaded - " +
                uploadfile.getOriginalFilename(), new HttpHeaders(), HttpStatus.OK);
    }
    private void saveUploadedFiles(List<MultipartFile> files) throws IOException {
        for (MultipartFile file : files) {

            if (file.isEmpty()) {
                continue;
            }

            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            System.out.println(file.getOriginalFilename());
            Files.write(path, bytes);
        }
    }


}