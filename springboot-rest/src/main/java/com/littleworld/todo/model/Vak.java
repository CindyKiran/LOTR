package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Vak {
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String naam;
    private int periode;
    private int maxStudiePunten = 5;
    private int maxStudenten;
    private String docentNaam;
    private String rasEis[];
    @ManyToMany
    private Set<Opleiding> opleidingen;

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

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

    public String[] getRasEis() {
        return rasEis;
    }

    public void setRasEis(String[] rasEis) {
        this.rasEis = rasEis;
    }

    public String getDocentNaam() {
        return docentNaam;
    }

    public void setDocentNaam(String docentNaam) {
        this.docentNaam = docentNaam;
    }
}
