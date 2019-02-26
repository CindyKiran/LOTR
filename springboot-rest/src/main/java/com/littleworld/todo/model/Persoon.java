package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Persoon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String creature;
    private String firstName;
    private String lastName;
    private String userName;
    private String passWord;
    private int age;
    private String place;
    @ManyToOne
    private University university;




    public long getId() { return id; }

    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }

    public String getPassWord() { return passWord; }
    public void setPassWord(String passWord) { this.passWord = passWord; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getPlace() { return place; }
    public void setPlace(String place) { this.place = place; }

    public String getCreature() { return creature; }
    public void setCreature(String creature) { this.creature = creature; }

    public University getUniversity() {
        return university;
    }
    public void setUniversity(University university) {
        this.university = university;
    }

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
}
