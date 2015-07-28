package io.github.lordviktor.javawebpoc.core.service;

import io.github.lordviktor.javawebpoc.core.exception.alreadyExists.StudentExistsException;
import io.github.lordviktor.javawebpoc.core.exception.invalidArgument.InvalidArgumentException;
import io.github.lordviktor.javawebpoc.core.service.base.AbstractCrudService;
import io.github.lordviktor.javawebpoc.persistence.entity.Student;
import io.github.lordviktor.javawebpoc.persistence.repository.StudentRepositoryContract;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

@Service
public class StudentService extends AbstractCrudService<Student> {

	protected StudentRepositoryContract studentRepository;

	@Inject
	public StudentService(StudentRepositoryContract repository) {
		super(repository);
		this.studentRepository = repository;
	}

	@Override
	protected void checkBussinessKey(Student entity)
			throws StudentExistsException {
		Student test = this.studentRepository.findByName(entity.getName());
		if (test != null)
			throw new StudentExistsException(test);
	}

	@Override
	protected void checkIfValid(Student entity) throws InvalidArgumentException {
		// TODO: Other types of validation here
	}
}