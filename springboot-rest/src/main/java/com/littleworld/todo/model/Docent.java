package com.littleworld.todo.model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Docent extends Persoon {

    @OneToMany
    private Set<Vak> vakken;

    public Set<Vak> getVakken() {
        return vakken;
    }

    public void setVakken(Set<Vak> vakken) {
        this.vakken = vakken;
    }

    public void lesGeven(){

    }
    public void beoordelen(){

    }
    public void huiswerkGeven(){

    }
}
