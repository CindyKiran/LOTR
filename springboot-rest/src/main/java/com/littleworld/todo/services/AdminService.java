package com.littleworld.todo.services;

import com.littleworld.todo.model.Administratie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminService extends CrudRepository<Administratie, Long> {
}
