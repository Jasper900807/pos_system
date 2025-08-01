package tw.test.pos_system.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tw.test.pos_system.entity.AttendanceRecord;
import tw.test.pos_system.entity.Employee;
import tw.test.pos_system.repository.AttendanceRecordRepository;
import tw.test.pos_system.repository.EmployeeRepository;

@Service
public class AttendanceRecordService {
    @Autowired
    private AttendanceRecordRepository attendanceRecordRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public Optional<AttendanceRecord> clockIn(String eid) {
        Employee employee = employeeRepository.findById(eid).orElse(null);
        
        if (employee != null) {
            
        }


        return null;
    }
}
