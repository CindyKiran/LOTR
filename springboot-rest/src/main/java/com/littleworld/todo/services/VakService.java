package com.littleworld.todo.services;

import com.littleworld.todo.model.Student;
import com.littleworld.todo.model.Vak;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VakService extends CrudRepository<Vak, Long> {
    Iterable<Vak>findByOpleidingen_Id(int opleiding_id);
    Iterable<Vak>findByRasEis(Vak rasEis[]);
}
