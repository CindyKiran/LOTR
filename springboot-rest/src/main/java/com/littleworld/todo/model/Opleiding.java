package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Opleiding {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String naam;
    private String rasEis[];
    private String afdeling;
    private int maxStudiePunten = 50;
    @OneToMany
    private Set<Docent> docenten;
    @ManyToOne
    private University university;

    @ManyToMany (mappedBy="opleidingen")
    private Set<Vak> vakken;

    public Set<Vak> getVakken() {
        return vakken;
    }

    public void setVakken(Set<Vak> vakken) {
        this.vakken = vakken;
    }

    public long getId() {
        return id;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public Set<Docent> getDocenten() {
        return docenten;
    }

    public void setDocenten(Set<Docent> docenten) {
        this.docenten = docenten;
    }

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

//    public String getRasEis() {
//        return rasEis;
//    }
//
//    public void setRasEis(String rasEis) {
//        this.rasEis = rasEis;
//    }

    public String getAfdeling() {
        return afdeling;
    }

    public void setAfdeling(String afdeling) {
        this.afdeling = afdeling;
    }

    public int getMaxStudiePunten() {
        return maxStudiePunten;
    }

    public void setMaxStudiePunten(int maxStudiePunten) {
        this.maxStudiePunten = maxStudiePunten;
    }

    public String[] getRasEis() {
        return rasEis;
    }

    public void setRasEis(String[] rasEis) {
        this.rasEis = rasEis;
    }
}
