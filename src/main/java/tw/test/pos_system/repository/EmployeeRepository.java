package tw.test.pos_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tw.test.pos_system.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
    
}
