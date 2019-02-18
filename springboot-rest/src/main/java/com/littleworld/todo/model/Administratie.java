package com.littleworld.todo.model;

import javax.persistence.*;

@Entity
public class Administratie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private int totaalStudiePuntenVerplicht;
    private int totaalStudiePuntenNietVerplicht;

    @ManyToOne
    private University university;


    public long getId() {
        return id;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public int getTotaalStudiePuntenVerplicht() {
        return totaalStudiePuntenVerplicht;
    }

    public void setTotaalStudiePuntenVerplicht(int totaalStudiePuntenVerplicht) {
        this.totaalStudiePuntenVerplicht = totaalStudiePuntenVerplicht;
    }

    public int getTotaalStudiePuntenNietVerplicht() {
        return totaalStudiePuntenNietVerplicht;
    }

    public void setTotaalStudiePuntenNietVerplicht(int totaalStudiePuntenNietVerplicht) {
        this.totaalStudiePuntenNietVerplicht = totaalStudiePuntenNietVerplicht;
    }
    public void ontslagen(){

    }
    public void uitschrijven(){

    }
    public void diplomaGeven(){

    }
    public void inschrijvingGoedkeuren(){

    }
}
