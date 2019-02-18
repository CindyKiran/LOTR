package com.littleworld.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vak extends Opleiding{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private int periode;
    private int maxStudiePunten;
    private int maxStudenten;
    private boolean isVerplicht;

    @Override
    public long getId() {
        return id;
    }

    public int getPeriode() {
        return periode;
    }

    public void setPeriode(int periode) {
        this.periode = periode;
    }

    @Override
    public int getMaxStudiePunten() {
        return maxStudiePunten;
    }

    @Override
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
}
