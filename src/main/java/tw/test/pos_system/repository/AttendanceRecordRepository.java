package tw.test.pos_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tw.test.pos_system.entity.AttendanceRecord;

public interface AttendanceRecordRepository extends JpaRepository<AttendanceRecord, Long> {
    
}
