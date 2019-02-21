package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Vak {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String naam;
    private int periode;
    private int maxStudiePunten = 5;
    private int maxStudenten;
    private boolean isVerplicht;
    private String docent;
    private String rasEis[];
    @ManyToMany
    private Set<Opleiding> opleidingen;

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

//    public Set<Opleiding> getOpleidingen() {
//        return opleidingen;
//    }

//    public void setOpleidingen(Set<Opleiding> opleidingen) {
//        this.opleidingen = opleidingen;
//    }

    public long getId() {
        return id;
    }

    public int getPeriode() {
        return periode;
    }

    public void setPeriode(int periode) {
        this.periode = periode;
    }

    public int getMaxStudiePunten() {
        return maxStudiePunten;
    }

    public void setMaxStudiePunten(int maxStudiePunten) {
        this.maxStudiePunten = maxStudiePunten;
    }

    public int getMaxStudenten() {
        return maxStudenten;
    }

    public void setMaxStudenten(int maxStudenten) {
        this.maxStudenten = maxStudenten;
    }

    public boolean isVerplicht() {
        return isVerplicht;
    }

    public void setVerplicht(boolean verplicht) {
        isVerplicht = verplicht;
    }

    public String getDocent() {
        return docent;
    }

    public void setDocent(String docent) {
        this.docent = docent;
    }

    public String[] getRasEis() {
        return rasEis;
    }

    public void setRasEis(String[] rasEis) {
        this.rasEis = rasEis;
    }
}
