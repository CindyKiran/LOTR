package com.littleworld.todo.services;

import com.littleworld.todo.model.Opleiding;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpleidingService extends CrudRepository<Opleiding, Long> {
}
