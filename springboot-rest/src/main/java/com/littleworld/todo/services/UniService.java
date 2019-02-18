package com.littleworld.todo.services;

import com.littleworld.todo.model.University;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniService extends CrudRepository<University, Long> {
}
