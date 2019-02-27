package com.littleworld.todo.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Student extends Persoon {
    private int studiePunten;
//    @OneToMany
//    private Set<Vak> vakken;
//
//    public Set<Vak> getVakken() {
//        return vakken;
//    }
//
//    public void setVakken(Set<Vak> vakken) {
//        this.vakken = vakken;
//    }

//    public String opleiding;
//
//    public String getOpleiding() {
//        return opleiding;
//    }
//
//    public void setOpleiding(String opleiding) {
//        this.opleiding = opleiding;
//    }

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Opleiding opleiding;

    @ManyToMany
    private List<Vak> ingeschrevenVakken = new ArrayList<>();

    public List<Vak> getIngeschrevenVakken() {
        return ingeschrevenVakken;
    }

    public void setIngeschrevenVakken(List<Vak> ingeschrevenVakken) {
        this.ingeschrevenVakken = ingeschrevenVakken;
    }

    public void addIngeschrevenVakken(Vak vak){
        for(Vak v : ingeschrevenVakken ) {
            if(v.getId()== vak.getId()) {
                return;
            }
        }
        for(Vak v : getOpleiding().getVakken()){
            if(v.getId() == vak.getId()){
                this.ingeschrevenVakken.add(vak);
                return;
            }
        }
    }

    public Opleiding getOpleiding() {
        return opleiding;
    }

    public void setOpleiding(Opleiding opleiding) {
        this.opleiding = opleiding;
    }

    public int getStudiePunten() {
        return studiePunten;
    }

    public void setStudiePunten(int studiePunten) {
        this.studiePunten = studiePunten;
    }

    public void inschrijven(){

    }
    public void huiswerkInleveren(){

    }
    public void tentamenMaken(){

    }
}
