package tw.test.pos_system.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "employees")
public class Employee {
    
    @Id
    @Column(name = "employee_id")
    private String id;

    @Column(name = "employee_name")
    private String employeeName;

    // ---

    @OneToMany(mappedBy="attendance_records", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<AttendanceRecord> attendanceRecords;
}
