package com.littleworld.todo.services;

import com.littleworld.todo.model.Docent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocentService extends CrudRepository<Docent, Long> {
//    Iterable<Docent>findByUserNameAndPassWord(String userName, String passWord);
}
