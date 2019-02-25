package com.littleworld.todo.services;

import com.littleworld.todo.model.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentService extends CrudRepository<Student, Long> {
    Iterable<Student>findByUserNameAndPassWord(String userName, String passWord);
}
