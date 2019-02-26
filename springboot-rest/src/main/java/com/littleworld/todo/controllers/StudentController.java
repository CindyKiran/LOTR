package com.littleworld.todo.controllers;

import com.littleworld.todo.model.Student;
import com.littleworld.todo.services.StudentService;
import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import org.apache.catalina.connector.Response;
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

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;
    private static String UPLOADED_FOLDER = "C://Users//Denisa//Downloads";

    @ResponseBody
    @RequestMapping(value = "/student", method = RequestMethod.POST)
    public long create(@RequestBody Student student) {
        return studentService.save(student).getId();
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

    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(value = "/student/{id}", method = RequestMethod.DELETE)
    public void updateStudent(@PathVariable long id) {
        studentService.deleteById(id);
    }
}