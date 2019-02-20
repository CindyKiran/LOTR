package com.littleworld.todo.services;

import com.littleworld.todo.model.Opleiding;
import com.littleworld.todo.model.Vak;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import sun.jvm.hotspot.oops.Oop;

import javax.annotation.PostConstruct;

@Component
public class Initialiser {
    @Autowired
    private OpleidingService opleidingService;

    @Autowired
    private VakService vakService;

    @Autowired
    private StudentService studentService;

    @PostConstruct
    @Order(1)
    public void setupOpleiding(){

    }

}

