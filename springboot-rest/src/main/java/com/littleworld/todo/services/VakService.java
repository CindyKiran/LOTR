package com.littleworld.todo.services;

import com.littleworld.todo.model.Vak;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VakService extends CrudRepository<Vak, Long> {
}
