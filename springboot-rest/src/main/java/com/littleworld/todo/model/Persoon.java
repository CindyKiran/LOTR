package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Persoon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String naam;
    private int leeftijd;
    private String ras;
    private String userName;
    private String passWord;
    private String firstName;
    private String lastName;
    private String place;
    private String creature;
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

    public String getNaam() {
        return naam;
    }
    public void setNaam(String naam) {
        this.naam = naam;
    }

    public int getLeeftijd() {
        return leeftijd;
    }
    public void setLeeftijd(int leeftijd) {
        this.leeftijd = leeftijd;
    }

    public String getRas() {
        return ras;
    }
    public void setRas(String ras) {
        this.ras = ras;
    }
}
