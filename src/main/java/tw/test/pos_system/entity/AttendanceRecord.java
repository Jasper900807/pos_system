package tw.test.pos_system.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "attendance_records")
public class AttendanceRecord {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;


    @Enumerated(EnumType.STRING)
    @Column(name = "clock_type", nullable=false)
    private ClockType clockType;

    @Column(name = "clock_time", nullable=false)
    private LocalDateTime clockTime;

    public enum ClockType {
        IN,   // 上班
        OUT   // 下班
    }
    
    // ----

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="employee_id", nullable=false)
    // @JsonBackReference
    private Employee employee;

    public String getEmployeeId() {
        return employee != null ? employee.getId() : null;
    }

    public AttendanceRecord(Employee employee, ClockType clockType) {
        this.employee = employee;
        this.clockType = clockType;
        this.clockTime = LocalDateTime.now();
    }
}
